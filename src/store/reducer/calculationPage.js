import {SET_CURRENT_CALCULATION} from "../action/calculationPage";

const initialState = {
  currentCalculation: "",
  redirect : false,
  redirectUrl : ""
};

export default (state = initialState, action) => {

  switch (action.type){
    case SET_CURRENT_CALCULATION:
      return {...state,currentCalculation: action.data}
    default:
      return {...state}
  }


}
