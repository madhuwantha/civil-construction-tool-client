import {SET_CURRENT_CODE} from "../action/code";

const initialState = {
  currentCode: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CODE:
      return {...state,currentCode: action.data}
    default:
      return state
  }
}
