import {CALCULATION_SERVICEABILITY_CW_BSI} from "../urls";
import {SERVICEABILITY} from "./designLimitState";
import {CALCULATION} from "./method";
import {CRACK_WIDTH} from "./category";
import {BSI} from "./code";


export const calculation = [

  {
    limitState: SERVICEABILITY,
    category: CRACK_WIDTH,
    method: CALCULATION,
    code: BSI,
    calUrl : CALCULATION_SERVICEABILITY_CW_BSI
  }

];
