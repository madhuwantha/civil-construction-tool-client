//inputs: M, bw, d, hf, h, l2, le, fck, fcu, fyk, type

let b1 = 0
let bEff = 0
let k = 0
let z = 0
let x = 0
let As = 0
let Muf = 0
let kf = 0
let Asf = 0

const calcB1 = (l2, bw) => {
  b1 = (l2 - bw) / 2
}

const calcBEff = (l2, bw, le) => {
  calcB1(l2, bw)
  let l0 = 0.85 * le
  let bEff1 = 0.2 * b1 + 0.1 * l0

  if (bEff1 > b1) {
    bEff1 = 0.2 * l0
  }

  bEff = 2 * bEff1 + bw
}

const calcK = (M, d, fck) => {
  k = M / (bEff * Math.pow(d, 2) * fck)
}

const calcZ = (d, k) => {
  z = d * (0.5 + Math.sqrt(0.25 - (k / 1.134)))
  if (z > (0.95 * d)) {
    z = 0.95 * d
  }
}

const calcX = (d) => {
  x = (d - z) / 0.4
}

const calcAs = (M, fyk) => {
  As = M / (0.87 * fyk * z)
}

const calcMuf = (fck, bw, hf, d,) => {
  Muf = 0.567 * fck * (bEff - bw) * hf * (d - 0.5 * hf)
}

const calcKf = (M, fck, bw, d) => {
  kf = (M - Muf) / (fck * bw * Math.pow(d, 2))
}

const calcAsF = (fyk, hf, M, d) => {
  Asf = (Muf / (0.87 * fyk * (d - 0.5 * hf))) + ((M - Muf) / (0.87 * fyk * z))
}

export const calcAnswer = (l2, bw, le, M, fck, hf, fyk, d) => {


  let ans = 0
  calcBEff(l2, bw, le)
  calcK(M, d, fck)
  calcZ(d, k)
  calcX(d)

  if (x<hf){
    calcAs(M, fyk)
    ans = As
  }
  else {
    calcMuf(fck, bw, hf, d)
    calcKf(M, fck,bw, d)
    calcZ(d, kf)
    calcAsF(fyk, hf, M)

    ans = Asf
  }

  return {
    "mainAnswer": ans,
    // "subAnswers": [
    //   "name":
    // ]
  }
}
