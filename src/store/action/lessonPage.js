import {error, isLoading, success} from './behavior'
export const SET_CURRENT_LESSON  = "SET_CURRENT_LESSON";

export const setCurrentLesson = (lesson) => {
  return(
    {
      type: SET_CURRENT_LESSON,
      data: lesson,
    }
  );
}
