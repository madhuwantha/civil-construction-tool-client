// input: M, b, d, dDash, fck, fcu, c, fyk

const kDash = 0.156

let k = 0
let AsDash = 0
let z = 0
let x = 0
let As = 0
let AsCom = 0

const calcK = (M, b, d, fcu) => {
  k = M / (b * Math.pow(d, 2) * fcu)
}

const calcAsDash = (fcu, b, d, fyk, dDash) => {
  AsDash = (k - kDash) * fcu * b * Math.pow(d, 2) / (0.95 * fyk * (d - dDash))
}

const calcZ = (d, k) => {
  z = d * (0.5 + Math.sqrt(0.25 - k / 0.9))
}

const calcX = (d) => {
  x = (d - z) / 0.45
}

const calcAs = (M, fyk) => {
  As = M / (0.95 * fyk * z)
}

const calcAsCom = (M, fcu, b, d, fyk) => {
  AsCom = ((kDash * fcu * b * Math.pow(d, 2)) / (0.95 * fyk * z)) + AsDash
}

export const calcAnswer = (M, b, d, fcu, fyk, dDash) => {
  calcK(M, b, d, fcu)

  if (k <= kDash) {
    calcZ(d, k)
    calcX(d)
    calcAs(M, fyk)
  } else {
    calcZ(d, kDash)
    calcX(d)
    calcAsDash(fcu, b, d, fyk, dDash)
    calcAsCom(M, fcu, b, d, fyk)
  }

  // console.log("z:" + z + " x:" + x + " AsCom:" + AsCom + " As:" + As + " ")

  return {
    "mainAnswer": [As, AsCom],
    // "subAnswers": [
    //   "name":
    // ]
  }
}

