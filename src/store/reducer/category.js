import {SET_CURRENT_CATEGORY} from "../action/category";

const initialState = {
  currentCategory: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_CATEGORY:
      return {...state,currentCategory: action.data}
    default:
      return state
  }
}
