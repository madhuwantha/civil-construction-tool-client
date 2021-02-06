// b, d, fck, fcu, v, l, fy, fyv, As, Asv
const debug = true;

const alphaCW = 1
const k1 = 0.15
const gammaC = 1.5
const Asw = 157

let theta = 0.3839724354

let v1 = 0
let fcd = 0
let z = 0
let vrdMax = 0
let vrdConcrete = 0
let vDesign = 0
let crdConcrete = 0
let raw1 = 0
let k = 0
let sigmacp = 0
let vMin = 0
let cond = 0
let s = 0

const calcV1 = (fck, v) => {
  v1 = 0.6 * (1 - (fck / v))
  if (debug) {
    console.log("v1 = " + v1)
  }
}

const calcFcd = (fck) => {
  fcd = 0.567 * fck
  if (debug) {
    console.log("fcd = " + fcd)
  }
}

const calcZ = (d) => {
  z = 0.9 * d
  if (debug) {
    console.log("z = " + z)
  }
}

const calcThetaGreater = (b) => {
  let sine = (2 * vrdMax*1000) / (alphaCW * b * z * v1 * fcd)
  theta = 0.5 * Math.asin(sine)
  if (theta < 0.3839724354){
    theta = 0.3839724354
  }
  else if(theta > 0.7853981634){
    theta = 0.7853981634
  }
  if (debug) {
    console.log("sine = "+sine)
    console.log("theta = " + theta)
  }
}

const calcVRDMax = (b, fck, v, d) => {
  calcV1(fck, v)
  calcFcd(fck)
  calcZ(d)
  vrdMax = (alphaCW * b * z * v1 * fcd * Math.pow(10, -3)) / ((1 / Math.tan(theta)) + Math.tan(theta))
  if (debug) {
    console.log("vrdMax = " + vrdMax)
  }
}

export const calcVDesign = (v, l, d) => {
  console.log("v = " + v + " l = " + l + " d = " + d)
  vDesign = v * (((l / 2) - d) / (l / 2))
  if (debug) {
    console.log("vDesign = " + vDesign)
  }
  return vDesign
}

const calcK = (d) => {
  k = 1 + Math.sqrt(200 / d)
  if (k >= 2) {
    k = 2
  }
  if (debug) {
    console.log("k = " + k)
  }
}

const calcRaw1 = (As, b, d) => {
  raw1 = As / (b * d)

  if (raw1 >= 0.02) {
    raw1 = 0.02
  }
  if (debug) {
    console.log("raw1 = " + raw1)
  }
}

const calcCrdConcrete = () => {
  crdConcrete = 0.18 / gammaC
  if (debug) {
    console.log("crdConcrete = " + crdConcrete)
  }
}

const calcVRDConcrete = (fck, b, d, As) => {
  calcCrdConcrete()
  calcK(d)
  calcRaw1(As, b, d)
  vrdConcrete = (crdConcrete * k * Math.pow((100 * raw1 * fck), (1 / 3)) + k1 * sigmacp) * b * d * Math.pow(10, -3)
  if (debug) {
    console.log("vrdConcrete = " + vrdConcrete)
  }
}

const calcVMin = (fck) => {
  vMin = 0.035 * Math.pow(k, (3 / 2)) * Math.pow(fck, (1 / 2))
  if (debug) {
    console.log("fck = " + fck)
    console.log("vMin = " + vMin)
  }
}

const calcCond = (b, d, fck) => {
  calcK(d)
  calcVMin(fck)
  cond = (vMin + k1 * sigmacp) * b * d * Math.pow(10, -3)
  if (debug) {
    console.log("cond  = " + cond)
  }
}

const calcS = (fy, b, fck, v, d) => {
  calcVRDMax(b, fck, v, d)
  if (vrdMax < 250) {
    vrdMax = 250
    calcThetaGreater(b)
  }
  s = (Asw * z * 0.87 * fy) / (Math.tan(theta) * vDesign * Math.pow(10, 3))
  if (debug) {
    console.log("s = " + s)
  }
}

export const calcFinal = (v, l, b, d, fck, As, fy) => {
  let decision = 0
  calcCond(b, d, fck)
  calcVRDConcrete(fck, b, d, As)
  let vED = calcVDesign(v, l, d)

  console.log("cond = " + cond + " vrdConcrete = " + vrdConcrete + " vED = " + vED)

  if (cond < vrdConcrete) {
    if (vED > vrdConcrete) {
      decision = 1
    } else {
      decision = 0
    }
  } else {
    if (cond > vrdConcrete) {
      decision = 1
    } else {
      decision = 0
    }
  }

  if (decision === 1) {
    calcS(fy, b, fck, v, d)
    s = s - (s % 25)

    if (s > (0.75 * d)) {
      s = 0.75 * d
    }
    return s
  } else {
    return "Shear Reinforcement is not necessary"
  }
}
