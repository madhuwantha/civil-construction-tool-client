import store from "../store";
import {error, isLoading, success} from "./behavior";
import {calculation} from "../../constance/calculation";

export const SET_CURRENT_CALCULATION = "SET_CURRENT_CALCULATION";
export const ADD_CALCULATION = "ADD_CALCULATION";
export const REMOVE_CALCULATION = "REMOVE_CALCULATION";

// TODO : add redirect (url)
// TODO :remove redirect

export const setCurrentCalculation = (calculationPage) => {
  if (calculationPage !== undefined) {
    let limitState = store.getState().limitState.currentLimitState
    let category = store.getState().category.currentCategory
    let method = store.getState().method.currentMethod
    let code = store.getState().code.currentCode

    return async (dispatch) => {
      try {
        dispatch(isLoading(true));
        let calculation_ = []
        calculation_ = calculation.filter(cal =>
          cal.limitState === limitState &&
          cal.category === category &&
          cal.method === method &&
          cal.code === code
        )
        dispatch(isLoading(false));
        dispatch(success("Calculation page Loaded successfully"))
        dispatch({
          type: SET_CURRENT_CALCULATION,
          data: calculation_[0].calUrl,
        });

      } catch (e) {
        dispatch(error("Calculation page Loading Failed"))
      }
    }

  } else {
  }

}

export const addCalculation = (url) => {
  return {
    type: ADD_CALCULATION,
    data: url
  }
}

export const removeCalculation = () => {
  return{
    type: REMOVE_CALCULATION
  }
}
