import {SERVICEABILITY,ULTIMATE} from "./designLimitState";
import {CRACK_WIDTH,DEFLECTION,SHEAR,FLEXURE} from "./category";
import {LESSON} from "./method";
import {BSI,EC} from "./code";

/**
 * Serviceability
 * @type {string}
 */
export const  LESSON_SERVICEABILITY_LIMIT_STATE = "Serviceability_Limit_State";

//CRACK_WIDTH
export const  LEARN_HOW_TO_CALCULATE_CRACK_WIDTH_BS = "Learn_How_to_Calculate_Crack_Width_BS";
export const CRACK_WIDTH_ANALYTICAL_METHOD_BS = "Crack_Width_Analytical_Method_BS";
export const CRACK_WIDTH_ANALYTICAL_METHOD_BS_EXAMPLE_BS = "Crack_Width_Analytical_Method_BS_Example_BS";
export const CRACK_WIDTH_BS_SIMPLIFIED_METHOD_BS = "Crack_Width_BS_Simplified_Method_BS";


export const  LEARN_HOW_TO_CALCULATE_CRACK_WIDTH_EC = "Learn_How_to_Calculate_Crack_Width_EC";
export const  CRACK_WIDTH_ANALYTICAL_METHOD_EC = "Crack_Width_Analytical_Method_EC";
export const  CRACK_WIDTH_ANALYTICAL_METHOD_EC_EXAMPLE_EC = "Crack_Width_Analytical_Method_EC_Example_EC";
export const  CRACK_WIDTH_SIMPLIFIED_METHOD_EC = "Crack_Width_Simplified_Method_EC";


//DEFLECTION
export const  LEARN_HOW_TO_CALCULATE_DEFLECTION_BS = "Learn_How_to_Calculate_Deflection_BS";
export const  DEFLECTION_BS_SIMPLIFIED_METHOD = "Deflection_BS_Simplified_Method";
export const  DEFLECTION_BS_ANALYTICAL_METHOD = "Deflection_BS_Analytical_Method";
export const  DEFLECTION_BS_ANALYTICAL_METHOD_BS_EXAMPLE = "Deflection_BS_Analytical_Method_BS_Example";

export const  LEARN_HOW_TO_CALCULATE_DEFLECTION_EC = "Learn_How_to_Calculate_Deflection_EC";
export const  DEFLECTION_EC_SIMPLIFIED_METHOD = "Deflection_EC_Simplified_Method";
export const  DEFLECTION_EC_ANALYTICAL_METHOD = "Deflection_EC_Analytical_Method";
export const  DEFLECTION_EC_ANALYTICAL_METHOD_EC_EXAMPLE = "Deflection_EC_Analytical_Method_EC_Example";


/**
 * Ultimate Limit State
 * @type {string}
 */
export const  ULTIMATE_LIMIT_STATE = "Ultimate_Limite_State";

//Flexure
export const ULTIMATE_LEARN_FLEXURE_BS = "Ultimate_Learn_Flexure_BS";
export const ULTIMATE_LEARN_FLEXURE_EC = "Ultimate_Learn_Flexure_EC";


//Shear
export const ULTIMATE_LEARN_SHEAR_BS_GUIDED_EXAMPLE = "Ultimate_Learn_Shear_BS_Guided_Example";
export const ULTIMATE_LEARN_SHEAR_EC = "Ultimate_Learn_Shear_EC";
export const ULTIMATE_VSI_METHOD_EC = "Ultimate_VSI_Method_EC";
export const ULTIMATE_LEARN_SHEAR_BS = "Ultimate_Learn_Shear_BS";



export const lessons = [
  {
    limitState: SERVICEABILITY,
    category: null,
    method: LESSON,
    code: null,
    lessonPage: LESSON_SERVICEABILITY_LIMIT_STATE
  },
  {
    limitState: SERVICEABILITY,
    category: CRACK_WIDTH,
    method: LESSON,
    code: BSI,
    lessonPage: LEARN_HOW_TO_CALCULATE_CRACK_WIDTH_BS
  },
  {
    limitState: SERVICEABILITY,
    category: CRACK_WIDTH,
    method: LESSON,
    code: EC,
    lessonPage: LEARN_HOW_TO_CALCULATE_CRACK_WIDTH_EC
  },
  {
    limitState: SERVICEABILITY,
    category: DEFLECTION ,
    method: LESSON,
    code: BSI,
    lessonPage:LEARN_HOW_TO_CALCULATE_DEFLECTION_BS
  },
  {
    limitState: SERVICEABILITY,
    category: DEFLECTION ,
    method: LESSON,
    code: EC,
    lessonPage:LEARN_HOW_TO_CALCULATE_DEFLECTION_EC
  },
  {
    limitState: ULTIMATE,
    category: FLEXURE ,
    method: LESSON,
    code: BSI,
    lessonPage:ULTIMATE_LEARN_FLEXURE_BS
  },
  {
    limitState: ULTIMATE,
    category: FLEXURE ,
    method: LESSON,
    code: EC,
    lessonPage:ULTIMATE_LEARN_FLEXURE_EC
  },
  {
    limitState: ULTIMATE,
    category: SHEAR ,
    method: LESSON,
    code: BSI,
    lessonPage:ULTIMATE_LEARN_SHEAR_BS
  },
  {
    limitState: ULTIMATE,
    category: SHEAR ,
    method: LESSON,
    code: EC,
    lessonPage:ULTIMATE_LEARN_SHEAR_EC
  },
];
