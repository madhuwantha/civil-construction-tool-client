// b, d, fck, fcu, v, M, fy, fyv, As, Asv
const gammaM = 1.25
const link = 10

let vc = 0
let sc = 0
let sv = 0
let Asv = 0

const calcVc = (As, b, v, d) => {
  let tempd = d
  if (tempd >= 400) {
    tempd = 400
  }

  let y = ((100 * As) / (b * d))
  let x = (400 / tempd)
  if (y >= 3) {
    y = 3
  }
  if (y <= 0.15) {
    y = 0.15
  }
  vc = (0.79 *
    Math.pow(y, (1 / 3)) *
    Math.pow(x, (1 / 4))) / gammaM

}

const calcAsv = () => {
  Asv = (Math.PI * Math.pow(link, 2)) / 2
}

export const calcShearCapacity = (v, b, d) => {
  sc = (v * Math.pow(10, 3)) / (b * d)
  console.log("fv = " + v + " fb = " + b + " fd = " + d)
  console.log(sc)
  return sc
}

const calcSpacingCond1 = (fyv, b) => {
  sv = (0.95 * Asv * fyv) / (0.4 * b)
}

const calcSpacingCond2 = (fyv, b, sc) => {
  sv = (0.95 * Asv * fyv) / (b * (sc - vc))
}

export const calcSpacing = (fyv, b, sc, fcu, d, As, v) => {
  console.log("v = " + v + " b = " + b + " d = " + d)
  calcAsv()
  calcVc(As, b, v, d)
  sc = calcShearCapacity(v, b, d)
  if ((sc > (0.5 * vc)) && (sc < (vc + 0.4))) {
    calcSpacingCond1(fyv, b)
  } else if ((sc > (vc + 0.4) && (sc < 0.8 * Math.sqrt(fcu)))) {
    calcSpacingCond2(fyv, b, sc)
  } else if (sc < (0.5 * vc)) {
    sv = 0
  }

  console.log(sv)

  if (sv > (0.75 * d)) {
    sv = (0.75 * d)
  } else if (sv < 150) {
    sv = 150
  }

  sv = sv - (sv % 25)

  console.log("vc = " + vc + " sc = " + sc + " sv = " + sv + " Asv = " + Asv)
  return sv
}
