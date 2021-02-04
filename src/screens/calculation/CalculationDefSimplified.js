// no, M, fcu, b, fy, d, dDash, asDash, as

const kDash = 0.156

let k = 0
let z = 0
let x = 0
let asReq = 0
let asDashReq = 0
let fs = 0
let f1 = 0
let f2 = 0

/**
 * For k
 * @param M
 * @param b
 * @param d
 * @param fcu
 */
const calcK = (M, b, d, fcu) => {
  k = (M * Math.pow(10, 6)) / (b * Math.pow(d, 2) * fcu)
}

/**
 * For z
 * @param d
 * @param k
 */
const calcZ = (d, k) => {
  let sqr = Math.sqrt((0.25 - k / 0.9))
  z = d * (0.5 + sqr)
  let cond = 0.95 * d
  if (z > cond) {
    z = cond
  }
}

/**
 * For x
 * @param d
 */
const calcX = (d) => {
  x = (d - z) / 0.45
}

/**
 * For required As
 * @param M
 * @param fy
 */
const calcAsLess = (M, fy) => {
  asReq = M * Math.pow(10, 6) / (0.95 * fy * z)
}

/**
 * For as dash
 * @param fcu
 * @param b
 * @param d
 * @param fy
 * @param dDash
 */
const calcAsDash = (fcu, b, d, fy, dDash) => {
  asDashReq = ((k - kDash) * fcu * b * Math.pow(d, 2)) / (0.95 * fy * (d - dDash))
}

/**
 * For As required
 * @param fcu
 * @param b
 * @param d
 * @param fy
 */
const calcAsGreater = (fcu, b, d, fy) => {
  asReq = ((kDash * fcu * b * Math.pow(d, 2)) / (0.95 * fy * z)) + asDashReq
}

/**
 * For Fs
 * @param fy
 * @param as
 */
const calcFs = (fy, as) => {
  fs = (2 * fy * asReq) / (3 * as)
}

/**
 * For F1
 * @param M
 * @param b
 * @param d
 */
const calcF1 = (M, b, d) => {
  f1 = 0.55 + (477 - fs) / (120 * (0.9 + (M * Math.pow(10, 6)) / (b * Math.pow(d, 2))))
  if (f1 > 2) {
    f1 = 2
  }
}

/**
 * For F2
 * @param asDash
 * @param b
 * @param d
 */
const calcF2 = (asDash, b, d) => {
  f2 = 1 +((((100 * asDash) / (b * d))) / (3 + ((100 * asDash) / (b * d))))
  if (f2 > 1.5) {
    f2 = 1.5
  }
}

/**
 * For Allowable value
 * @param no
 * @param M
 * @param b
 * @param d
 * @param asDash
 * @param fy
 * @param as
 * @param fcu
 * @param dDash
 * @returns {Promise<number>}
 */
export const calcAllow = async (no, M, b, d, asDash, fy, as, fcu, dDash) => {
  await calcK(M, b, d, fcu)
  if (k < kDash || k === kDash) {
    calcZ(d, k)
    calcX(d)
    calcAsLess(M, fy)
  } else {
    calcZ(d, kDash)
    calcX(d)
    calcAsDash(fcu, b, d, fy, dDash)
    calcAsGreater(fcu, b, d, fy)
  }
  calcFs(fy, as)
  calcF1(M, b, d)
  calcF2(asDash, b, d)

  console.log("k -> " + k + "z -> "+z + "x ->" + x + "asLess ->" + asReq + "asDAsh ->" + asDashReq + "Fs -> " + fs + "F1 -> "+ f1 +"F2 ->" +f2+ "no-> " + no )
  return no * f1 * f2
}

/**
 * For true values
 * @param L
 * @param d
 * @returns {number}
 */
export const calcTrue = (L, d) => {
  return L / d;
}



