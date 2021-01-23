const k = 0.104

let Acr = 0;
let alphaAs = 0;
let xCW = 0;
let xDF = 0;
let FsCW = 0;
let FsDF = 0;
let ephsOne = 0;
let dCW = 0;
let dDF = 0;
let ephsM = 0;
let EcmBSI = 0;
let I = 0;
let gammaB = 0;
let gamma = 0;


export const calcEcmBSI = (fck) => {
    EcmBSI = (Math.pow(10, -8) * Math.pow(fck, 5)) -
    (3.2 * Math.pow(10, -6) * Math.pow(fck, 4)) +
    (0.00038 * Math.pow(fck, 3)) -
    (0.022 * Math.pow(fck, 2)) +
    (0.82 * fck) +
    19
  return EcmBSI;
}

const calcAcr = (corner, radius) => {
  Acr = Math.sqrt(2) * (corner + radius) - radius;
  console.log(Acr)
}
const calcDCW = (h, corner, phi) => {
  dCW = h - corner - (phi / 2);
}

const calcDDF = (h, c, phi, nBar) => {
  if (nBar < 3 || nBar === 3) {
    dDF = h - c - phi / 2
  } else {
    dDF = h - (3 * c) / 2 - phi
  }
}

const calcAlphaAs = (Es, As) => {
  alphaAs = (Es * As) / EcmBSI;
}

const calcXCW = (b) => {
  let sqr = Math.sqrt(Math.pow(alphaAs, 2) + (2 * b * alphaAs * dCW))
  let xPlus = (-alphaAs + sqr) / b
  let xMin = (-alphaAs - sqr) / b
  if (xPlus > 0 || xPlus === 0) {
    xCW = xPlus
  } else if (xMin > 0 || xMin === 0) {
    xCW = xMin
  } else xCW = 0;
}

const calcXDF = (b) => {
  let sqr = Math.sqrt(Math.pow(alphaAs, 2) + 2 * b * alphaAs * dDF)
  xDF = (-alphaAs + sqr) / b
}

const calcFsCW = (M, h, corner, b, Es, As) => {
  FsCW = M * Math.pow(10, 6) / ((dCW - xCW / 3) * As);
}

const calcFsDF = (M, As) => {
  FsDF = (M * Math.pow(10, 6)) / ((dDF - (xDF / 3)) * As)
}

const calcEphsOne = (h, corner, Es) => {
  ephsOne = ((h - xCW) * FsCW) / ((dCW - xCW) * Es);
}

const calcEphM = (b, h, Es, As) => {
  ephsM = ephsOne - ((b * Math.pow((h - xCW), 2)) / (3 * Es * As * (dCW - xCW)));
}

const calcI = (b, h) => {
  I = (b * Math.pow(h, 3)) / 12
}

const calcGammaB = (M) => {
  gammaB = (M * Math.pow(10, 3)) / (EcmBSI * I)
}

const calcGamma = (Es) => {
  gamma = FsDF / ((dDF - xDF) * Es * Math.pow(10, 3))
}

//CWBSI
export const calcWMax = (corner, Es, As, h, b, M, cMin, phi) => {
  calcAcr(corner, phi / 2)
  calcDCW(h, corner, phi)
  calcAlphaAs(Es, As)
  calcXCW(b)
  calcFsCW(M, h, corner, b, Es, As)
  calcEphsOne(h, corner, Es)
  calcEphM(b, h, Es, As)

  return (3 * Acr * ephsM * Math.pow(10, -3)) / (1 + 2 * ((Acr - cMin) / (h - xCW)));
}

//DFBSI
export const calcA = (h, c, bar, nBar, Es, As, b, M, l) => {
  calcDDF(h, c, bar, nBar)
  calcAlphaAs(Es, As)
  calcI(b, h)
  calcGammaB(M)
  calcXDF(b)
  calcFsDF(M, As)
  calcGamma(Es)

  return k * Math.pow(l, 2) * gamma
}
