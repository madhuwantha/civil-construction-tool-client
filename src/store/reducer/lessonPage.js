import {SET_CURRENT_LESSON} from "../action/lessonPage";

const initialState = {
  currentLesson: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LESSON:
      return {...state,currentLesson: action.data}
    default:
      return state
  }
}
