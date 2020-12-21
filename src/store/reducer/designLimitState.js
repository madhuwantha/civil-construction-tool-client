import {SET_CURRENT_LIMIT_STATE} from "../action/designLimitState";

const initialState = {
  currentLimitState: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LIMIT_STATE:
      return {...state,currentLimitState: action.data}
    default:
      return state
  }
}
