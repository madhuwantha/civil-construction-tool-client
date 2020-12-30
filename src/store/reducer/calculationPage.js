import {SET_CURRENT_CALCULATION, ADD_CALCULATION, REMOVE_CALCULATION} from "../action/calculationPage";

const initialState = {
  currentCalculation: "",
  redirect : false,
  redirectUrl : ""
};

export default (state = initialState, action) => {

  switch (action.type){
    case SET_CURRENT_CALCULATION:
      return {...state,currentCalculation: action.data}
    case ADD_CALCULATION:
      return {...state,redirect: true, redirectUrl: action.data}
    case  REMOVE_CALCULATION:
      return {...state, redirect: false}
    default:
      return {...state}
  }


}
