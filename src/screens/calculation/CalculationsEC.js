const k1 = 0.8
const k2 = 0.5
const k3 = 3.4
const k4 = 0.425
const phiInfCW= 2.2
const beta = 0.5
const k = 0.104
const phiInfDF = 2.8

let EcmEC = 0
let EcEff = 0
let alphaE = 0
let d = 0
let xCW = 0
let xDF = 0
let z = 0
let sigma = 0
let ephSM = 0
let hCEff = 0
let ACEff = 0
let rowPEff = 0
let sRMax = 0
let alphaAs = 0
let Iuc = 0
let gammaUC = 0
let Icr = 0
let gammaCR = 0
let fctm = 0
let mcr = 0
let sy = 0
let gamma = 0

export const calcEcmEC = (fck) => {
  EcmEC = 7.6 * Math.pow(10, -10) * Math.pow(fck, 6) -
    2.1 * Math.pow(10, -7) * Math.pow(fck, 5) +
    2.1 * Math.pow(10, -5) * Math.pow(fck, 4) -
    0.00097 * Math.pow(fck, 3) +
    0.018 * Math.pow(fck, 2) +
    0.26 * fck +
    23

  return EcmEC;
}

const calcEcEff = (phiInf) => {
  EcEff = EcmEC / (1 + phiInf)
}

const calcAlphaE = (Es) => {
  alphaE = Es / EcEff
}

const calcAlphaAs = (Es, As) => {
  alphaAs = (Es * As) / EcEff
}

const calcIuc = (b, h) => {
  Iuc = (b * Math.pow(h, 3)) / 12
}

const calcD = (h, c, phi, nBar) => {
  if (nBar < 3 || nBar === 3) {
    d = h - c - phi / 2
  } else {
    d = h - (3 * c) / 2 - phi
  }
}

const calcGammaUC = (M) => {
  gammaUC = M * Math.pow(10, 3) / (EcEff * Iuc)
}

const calcXCW = (As, b) => {
  let sqr = Math.sqrt(Math.pow(alphaE * As, 2) + (2 * b * alphaE * As * d))
  let xPlus = (-alphaE * As + sqr) / b
  let xMin = (-alphaE * As - sqr) / b
  if (xPlus > 0 || xPlus === 0) {
    xCW = xPlus
  } else if (xMin > 0 || xMin === 0) {
    xCW = xMin
  } else xCW = 0;
}

const calcXDF = (b) => {
  let sqr = Math.sqrt(Math.pow(alphaAs, 2) + 2 * b * alphaAs * d)
  xDF = (-alphaAs + sqr) / b
}

const calcIcr = (b) => {
  Icr = ((b * Math.pow(xDF, 3)) / 3) + alphaAs * Math.pow((d - xDF), 2)
}

const calcGammaCR = (M) => {
  gammaCR = M * Math.pow(10, 3) / (EcEff * Icr)
}

const calcFctm = (fck) => {
  fctm = -1.3 * Math.pow(10, -10) * Math.pow(fck, 6) +
    4.1 * Math.pow(10, -8) * Math.pow(fck, 5) -
    5 * Math.pow(10, -6) * Math.pow(fck, 4) +
    0.00029 * Math.pow(fck, 3) -
    0.0089 * Math.pow(fck, 2) +
    0.21 * fck -
    0.034
}

const calcMcr = (b, h) => {
  mcr = fctm * (b * Math.pow(h, 2) / 6)
}

const calcSy = (M) => {
  sy = 1 - (beta * Math.pow((mcr * Math.pow(10, -6) / M), 2))
}

const calcGamma = () => {
  gamma = (sy * gammaCR) + (1 - sy) * gammaUC
}

const calcZ = () => {
  z = d - xCW / 3
}

const calcSigma = (m, As) => {
  sigma = m * Math.pow(10, 6) / (z * As)
}

const calcEphSM = (Es) => {
  ephSM = sigma / (Es * 1000)
}

const calcHCEff = (h) => {
  let cond1 = 2.5 * (h - d)
  let cond2 = (h - xCW) / 3
  let cond3 = h / 2
  hCEff = Math.min(cond1, cond2, cond3)
}

const calcACEff = (b) => {
  ACEff = b * hCEff
}

const calcRowPEff = (As) => {
  rowPEff = As / ACEff
}

const calcSRMax = (phi, c) => {
  sRMax = (k3 * c) + (k1 * k2 * k4 * phi) / rowPEff
}

//CWEC
export const calcWk = (fck, Es, h, phi, As, b, m, nBar, c) => {
  calcEcEff(phiInfCW)
  calcAlphaE(Es)
  calcD(h, c, phi, nBar)
  calcXCW(As, b)
  calcZ()
  calcSigma(m, As)
  calcEphSM(Es)
  calcHCEff(h)
  calcACEff(b)
  calcRowPEff(As)
  calcSRMax(phi, c)

  return (sRMax * ephSM);
}

//DFEC
export const calcDef = (fck, Es, As, b, h, c, phi, M, l, nBar) => {
  calcEcEff(phiInfDF)
  calcAlphaAs(Es, As)
  calcIuc(b, h)
  calcD(h, c, phi, nBar)
  calcGammaUC(M)
  calcXDF(b)
  calcIcr(b)
  calcGammaCR(M)
  calcFctm(fck)
  calcMcr(b, h)
  calcSy(M)
  calcGamma()
  return k * Math.pow(l, 2) * gamma
}
