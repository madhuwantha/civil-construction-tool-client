import { CHANGE_STATE, ADD_MESSAGE, DEL_ALL, ERROR, SUCCESS } from "../action/behavior";

const initialState = {
  isLoading: false,
  messages: [],
  isError: false,
  errorMsg: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_STATE:
      // console.log(action);
      return { ...state, isLoading: action.isLoading };
      break;
    case ADD_MESSAGE:
      let newMessages = state.messages;
      return { ...state, messages: newMessages.push(action.data) };
      break;
    case DEL_ALL:
      return { ...state, messages: [] };
      break;
    case ERROR:
      // console.log("in error state")
      return {...state,isError: true, errorMsg: action.message }
      break;
    case SUCCESS:
      return {...state}
      break;
    default:
      return state;
  }
};
