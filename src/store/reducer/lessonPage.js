import {SET_CURRENT_LESSON,SET_CHANGE_FALSE,SET_CHANGE_TRUE} from "../action/lessonPage";

const initialState = {
  currentLesson: "",
  isChange: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_LESSON:
      return {...state,currentLesson: action.data}
    case SET_CHANGE_FALSE:
      return {...state,isChange:false}
    case SET_CHANGE_TRUE:
      return {...state,isChange:true}
    default:
      return state
  }
}
