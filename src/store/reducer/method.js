import {SET_CURRENT_METHOD} from "../action/method";

const initialState = {
  currentMethod: "",
};

export default (state = initialState, action) => {
  switch (action.type){
    case SET_CURRENT_METHOD:
      return {...state, currentMethod: action.data}
    default:
      return state;
  }
}
