const k = 0.104;

let Acr = 0;
let alphaAs = 0;
let xCW = 0;
let xDF = 0;
let FsCW = 0;
let FsDF = 0;
let ephsOne = 0;
let d = 0;
let ephsM = 0;
let EcmBSI = 0;
let I = 0;
let gammaB = 0;
let gamma = 0;

/**
 * For both crack width & deflection
 * @param fck
 * @returns {number}
 */
export const calcEcmBSI = (fck) => {
  EcmBSI =
    Math.pow(10, -8) * Math.pow(fck, 5) -
    3.2 * Math.pow(10, -6) * Math.pow(fck, 4) +
    0.00038 * Math.pow(fck, 3) -
    0.022 * Math.pow(fck, 2) +
    0.82 * fck +
    19;
  return EcmBSI;
};

/**
 * For crack width
 * @param corner
 * @param radius
 */
const calcAcr = (corner, radius) => {
  Acr = Math.sqrt(2) * (corner + radius) - radius;
  console.log(Acr);
};

/**
 * For deflection
 * @param h
 * @param c
 * @param phi
 * @param nBar
 */
const calcD = (h, c, phi, nBar) => {
  if (nBar < 3 || nBar === 3) {
    d = h - c - phi / 2;
  } else {
    d = h - (3 * c) / 2 - phi;
  }
};

/**
 * For crack width
 * @param Es
 * @param As
 */
const calcAlphaAs = (Es, As) => {
  alphaAs = (Es * As) / EcmBSI;
};

/**
 * For crack width
 * @param b
 */
const calcXCW = (b) => {
  let sqr = Math.sqrt(Math.pow(alphaAs, 2) + 2 * b * alphaAs * d);
  let xPlus = (-alphaAs + sqr) / b;
  let xMin = (-alphaAs - sqr) / b;
  if (xPlus > 0 || xPlus === 0) {
    xCW = xPlus;
  } else if (xMin > 0 || xMin === 0) {
    xCW = xMin;
  } else xCW = 0;
};

/**
 * For deflection
 * @param b
 */
const calcXDF = (b) => {
  let sqr = Math.sqrt(Math.pow(alphaAs, 2) + 2 * b * alphaAs * d);
  xDF = (-alphaAs + sqr) / b;
};

/**
 * For crack width
 * @param M
 * @param h
 * @param corner
 * @param b
 * @param Es
 * @param As
 */
const calcFsCW = (M, h, corner, b, Es, As) => {
  FsCW = (M * Math.pow(10, 6)) / ((d - xCW / 3) * As);
};

/**
 * For deflection
 * @param M
 * @param As
 */
const calcFsDF = (M, As) => {
  FsDF = (M * Math.pow(10, 6)) / ((d - xDF / 3) * As);
};

/**
 * For crack width
 * @param h
 * @param corner
 * @param Es
 */
const calcEphsOne = (h, corner, Es) => {
  ephsOne = ((h - xCW) * FsCW) / ((d - xCW) * Es);
};

/**
 * For crack width
 * @param b
 * @param h
 * @param Es
 * @param As
 */
const calcEphM = (b, h, Es, As) => {
  ephsM = ephsOne - (b * Math.pow(h - xCW, 2)) / (3 * Es * As * (d - xCW));
};

/**
 * For deflection
 * @param b
 * @param h
 */
const calcI = (b, h) => {
  I = (b * Math.pow(h, 3)) / 12;
};

/**
 * For deflection
 * @param M
 */
const calcGammaB = (M) => {
  gammaB = (M * Math.pow(10, 3)) / (EcmBSI * I);
};

/**
 * For deflection
 * @param Es
 */
const calcGamma = (Es) => {
  gamma = FsDF / ((d - xDF) * Es * Math.pow(10, 3));
};

/**
 * Final answer for crack width
 * @param corner
 * @param Es
 * @param As
 * @param h
 * @param b
 * @param M
 * @param phi
 * @param nBar
 * @returns {{"sub-answers": [{name: string, value: number}, {name: string, value: number}, {name: string, value: number}, {name: string, value: number}], "main-answer": number}}
 */
export const calcWMax = (corner, Es, As, h, b, M, phi, nBar) => {
  calcAcr(corner, phi / 2);
  calcD(h, corner, phi, nBar);
  calcAlphaAs(Es, As);
  calcXCW(b);
  calcFsCW(M, h, corner, b, Es, As);
  calcEphsOne(h, corner, Es);
  calcEphM(b, h, Es, As);

  let ans =
    (3 * Acr * ephsM * Math.pow(10, -3)) /
    (1 + 2 * ((Acr - corner) / (h - xCW)));
  return {
    mainAnswer: ans,
    subAnswers: {
      x: xCW,
      fs: FsCW,
      epsOne: ephsOne,
      epsM: ephsM,
    },
  };
};

/**
 * Final Answer for deflection
 * @param h
 * @param c
 * @param bar
 * @param nBar
 * @param Es
 * @param As
 * @param b
 * @param M
 * @param l
 * @returns {{subAnswers: [{name: string, value: number}, {name: string, value: number}, {name: string, value: number}, {name: string, value: number}], mainAnswer: number}}
 */
export const calcA = (h, c, bar, nBar, Es, As, b, M, l) => {
  calcD(h, c, bar, nBar);
  calcAlphaAs(Es, As);
  calcI(b, h);
  calcGammaB(M);
  calcXDF(b);
  calcFsDF(M, As);
  calcGamma(Es);

  let ans = k * Math.pow(l, 2) * gamma;

  return {
    mainAnswer: ans,
    subAnswers: {
      gammaB: gammaB,
      x: xDF,
      fs: FsDF,
      gamma: gamma,
    },
  };
};
