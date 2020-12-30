import { CHANGE_STATE, ADD_MESSAGE, DEL_ALL, ERROR, SUCCESS } from "../action/behavior";

const initialState = {
  isLoading: false,
  messages: [],
  isError: false,
  errorMsg: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATE:
      // console.log(action);
      return { ...state, isLoading: action.isLoading };
    case ADD_MESSAGE:
      let newMessages = state.messages;
      return { ...state, messages: newMessages.push(action.data) };
    case DEL_ALL:
      return { ...state, messages: [] };
    case ERROR:
      // console.log("in error state")
      return {...state,isError: true, errorMsg: action.message }
    case SUCCESS:
      return {...state}
    default:
      return state;
  }
};
