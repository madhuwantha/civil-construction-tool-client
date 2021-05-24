//inputs: M, bw, d, hf, h, l2, le, fck, fcu, fyk, type

const kDash = 0.156

let bf = 0
let k = 0
let z = 0
let x = 0
let betaF = 0
let cond1 = 0
let AsDash = 0;
let As = 0
let AsSingly = 0
let AsDoubly = 0


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

const calcZ = (d, k) => {
  z = d * (0.5 + Math.sqrt(0.25 - (k / 0.9)))
}

const calcX = (d) => {
  x = (d - z) / 0.45
}

const calcBetaf = (hf, d, bw) => {
  betaF = 0.45 * (hf / d) * (1 - (bw / bf)) * (1 - (hf / (2 * d))) + 0.15 * (bw / bf)
}

const calcCond1 = (fcu, bw, d) => {

  console.log(fcu + " " + bw + " " + d)

  cond1 = betaF * fcu * bw * Math.sqrt(d)
}

const calcAsDash = (fcu, d, fy, h) => {
  AsDash = ((k - kDash) * fcu * bf * Math.pow(d, 2)) / (0.95 * fy * (d - (h - d)))
}

const calcAsDoubly = (fcu, d, fy) => {
  AsDoubly = ((kDash * fcu * bf * Math.pow(d, 2)) / (0.95 * fy * z)) + AsDash
}

const calcAsSingly = (M, fy) => {
  AsSingly = M / (0.95 * fy * z)
}

const calcAs = (M, fcu, bw, d, hf, fy) => {
  As = (M + (0.1 * fcu * bw * d) * (0.45 * d - hf)) / (0.95 * fy * (d - 0.5 * hf))
}

export const calcAnswerAs = (bw, le, type_, fcu, M, d, hf, fy, h) => {

  let ans = 0

  calcBf(bw, le, type_)
  calcK(bw, fcu, M, d)

  if (k < kDash) {
    calcBetaf(hf, d, bw)
    if (betaF < k) {
      k = betaF
      calcZ(d, k)
      calcAsSingly(M, fy)
      ans = AsSingly
    } else {
      if (hf < (0.45 * d)) {
        calcAsSingly(M, fy)
        ans = AsSingly
      } else {
        calcAs(M, fcu, bw, d, hf, fy)
        ans = As
      }
    }
  } else {
    calcZ(d, kDash)
    calcX(d)
    calcAsDash(fcu, d, fy, h)
    calcAsDoubly(fcu, bf, d, fy)

    ans = AsDoubly
  }

  return {
    "mainAnswer": ans,
    // "subAnswers": [
    //   "name":
    // ]
  }

}
