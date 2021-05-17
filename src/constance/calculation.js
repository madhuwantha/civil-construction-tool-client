import {
  CALCULATION_SERVICEABILITY_CW_BSI,
  CALCULATION_SERVICEABILITY_CW_EC,
  CALCULATION_SERVICEABILITY_DF_BSI,
  CALCULATION_SERVICEABILITY_DF_EC,
  CALCULATION_ULTIMATE_FLEX_FLANGE,
  CALCULATION_ULTIMATE_FLEX_RECT
} from "../urls";
import {SERVICEABILITY, ULTIMATE} from "./designLimitState";
import {CALCULATION} from "./method";
import {CRACK_WIDTH, DEFLECTION, FLEXURE} from "./category";
import {BSI, EC, FLANGE, RECT} from "./code";


export const calculation = [

  {
    limitState: SERVICEABILITY,
    category: CRACK_WIDTH,
    method: CALCULATION,
    code: BSI,
    calUrl : CALCULATION_SERVICEABILITY_CW_BSI
  },
  {
    limitState: SERVICEABILITY,
    category: CRACK_WIDTH,
    method: CALCULATION,
    code: EC,
    calUrl : CALCULATION_SERVICEABILITY_CW_EC
  },
  {
    limitState: SERVICEABILITY,
    category: DEFLECTION,
    method: CALCULATION,
    code: BSI,
    calUrl : CALCULATION_SERVICEABILITY_DF_BSI
  },
  {
    limitState: SERVICEABILITY,
    category: DEFLECTION,
    method: CALCULATION,
    code: EC,
    calUrl : CALCULATION_SERVICEABILITY_DF_EC
  },
  {
    limitState: ULTIMATE,
    category: FLEXURE,
    method: CALCULATION,
    code: FLANGE,
    calUrl: CALCULATION_ULTIMATE_FLEX_FLANGE
  },
  {
    limitState: ULTIMATE,
    category: FLEXURE,
    method: CALCULATION,
    code: RECT,
    calUrl: CALCULATION_ULTIMATE_FLEX_RECT
  }

];
