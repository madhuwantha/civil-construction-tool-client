// b, d, fck, fcu, v, M, fy, fyv, As, Asv
const gammaM = 1.25
const link = 10

let vc = 0
let sc = 0
let sv = 0
let Asv = 0

const calcVc = (As, b, v, d) => {
  vc = (0.79 *
    Math.pow(((100 * As) / (b * d)), (1 / 3)) *
    Math.pow((400 / d), (1 / 4))) / gammaM
}

const calcAsv = () => {
  Asv = (Math.PI * Math.pow(link, 2)) / 2
}

export const calcShearCapacity = (v, b, d) => {
  sc = (v * Math.pow(10, 3)) / (b * d)
  return sc
}

const calcSpacingCond1 = (fyv, b) => {
  sv = (0.95 * Asv * fyv) / (0.4 * b)
}

const calcSpacingCond2 = (fyv, b, sc) => {
  sv = (0.95 * Asv * fyv) / b * (sc - vc)
}

export const calcSpacing = (fyv, b, sc, fcu, d, As, v) => {
  calcAsv()
  calcVc(As, b, v, d)
  if ((sc > (0.5 * vc)) && (sc < (vc + 0.4))) {
    calcSpacingCond1(Asv, fyv, b)
  } else if ((sc > (vc + 0.4) && (sc < 0.8 * Math.sqrt(fcu)))) {
    calcSpacingCond2(Asv, fyv, b, sc, vc)
  } else if (sc < (0.5 * vc)) {
    sv = 0
  }

  if (sv > (0.75 * d)) {
    sv = (0.75 * d)
  } else if (sv < 150) {
    sv = 150
  }

  sv = sv - (sv % 25)
  return sv
}
