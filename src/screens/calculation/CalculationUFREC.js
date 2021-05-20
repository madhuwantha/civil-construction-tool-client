// input: M, b, d, dDash, fck, fcu, c, fyk

const kDash = 0.167

let k = 0
let z = 0
let As = 0
let AsDash = 0
let AsDoubly = 0

const calcK = (M, b, d, fck) => {
  k = M / (b * Math.pow(d, 2) * fck)
}

const calcZ = (d, k) => {
  z = d * (0.5 + Math.sqrt(0.25 - (k / 1.134)))
}

const calcAs = (M, fyk) => {
  As = M / (0.87 * fyk * z)
}

const calcAsDash = (fck, d, fyk, dDash, b) => {
  AsDash = ((k - kDash) * fck * b * Math.pow(d, 2)) / (0.87 * fyk * (d - dDash))
}

const calcAsDoubly = (fck, b, d, fyk) => {
  AsDoubly = ((kDash * fck * b * Math.pow(d, 2)) / (0.87 * fyk * z)) + AsDash
}

export const calcAnswerEC = (M, b, d, fck, fyk, dDash) => {
  let ans = 0

  calcK(M, b, d, fck)

  if (k < kDash) {
    calcZ(d, k)
    calcAs(M, fyk)

    ans = As
  } else {
    calcAsDash(fck, d, fyk, dDash, b)
    calcZ(d, kDash)
    calcAsDoubly(fck, b, d, fyk)

    ans = AsDoubly
  }

  return {
    "mainAnswer": [ans, AsDash],
    // "subAnswers": [
    //   "name":
    // ]
  }

}
