//inputs: M, bw, d, hf, h, l2, le, fck, fcu, fyk, type

let bf = 0
let k = 0
let z = 0
let x = 0
let betaF = 0
let cond1 = 0
let As = 0


const calcBf = (bw, le, type_) => {
  if (type_ === "T") {
    bf = bw + (0.7 * le) / 5
  } else if (type_ === "L") {
    bf = bw + (0.7 * le) / 10
  }
}

const calcK = (bw, fcu, M, d) => {
  k = M / (bw * Math.pow(d, 2) * fcu)
}

const calcZ = (d) => {
  z = d * (0.5 + Math.sqrt(0.25 - (k / 0.9)))
}

const calcX = (d) => {
  x = (d - z) / 0.45
}

const calcBetaf = (hf, d, bw) => {
  betaF = 0.45 * (hf / d) * (1 - (bw / bf)) * (1 - (hf / (2 * d))) + 0.15 * (bw / bf)
}

const calcCond1 = (fcu, bw, d) => {
  cond1 = betaF * fcu * bw * Math.sqrt(d)
}

export const calcAs = (bw, le, type_, fcu, M, d, hf, fy) => {

  calcBf(bw, le, type_)
  calcK(bw, fcu, M, d)
  calcZ(d)
  calcX(d)

  if ((0.9 * x) > hf) {
    calcBetaf(hf, d, bw)
  }else{
    // TODO: Complete else
  }

  calcCond1()

  if (M < cond1){
    As = (M + (0.1 * fcu * bw * d) * (0.45 * d - hf)) / (0.95 * fy * (d - 0.5 * hf))
  }
  else {
    // TODO: Complete else part
  }

  console.log(As)

  return {
    "mainAnswer": As,
    // "subAnswers": [
    //   "name":
    // ]
  }

}
