import {error, isLoading, success} from './behavior'
import store from '../store';
import {lessons} from '../../constance/dataFiles'
export const SET_CURRENT_LESSON  = "SET_CURRENT_LESSON";


export const setCurrentLesson = (lesson) => {


  if (lesson === undefined){
    let limitState = store.getState().limitState.currentLimitState
    let category = store.getState().category.currentCategory
    let method = store.getState().method.currentMethod
    let code = store.getState().code.currentCode


    return async (dispatch) => {
      try{
        dispatch(isLoading(true));
        let lesson_ = []
        lesson_ = await lessons.filter(lesson =>
          lesson.limitState === limitState &&
          lesson.category === category &&
          lesson.method === method &&
          lesson.code === code
        )
        dispatch(isLoading(false));
        dispatch(success("Lesson is Loaded successfully"))
        dispatch({
          type: SET_CURRENT_LESSON,
          data: lesson_[0].lessonPage,
        });

      }catch (err){
        dispatch(error("Lesson Loading Failed"))
      }
    }
  }else {
    return(
      {
        type: SET_CURRENT_LESSON,
        data: lesson,
      }
    );
  }



}
