
import React, {useState, useEffect} from "react";
import {error, isLoading, success} from './behavior'
import store from '../store';
import {lessons} from '../../constance/dataFiles'
import { useHistory } from 'react-router-dom'
export const SET_CURRENT_LESSON  = "SET_CURRENT_LESSON";
export const SET_CHANGE_FALSE  = "SET_CHANGE_FALSE";
export const SET_CHANGE_TRUE  = "SET_CHANGE_TRUE";

let locStorage = []

export const changeToFalse = () => {
  return {
    type: SET_CHANGE_FALSE
  }
}

export const changeToTrue = () => {
  return {
    type: SET_CHANGE_TRUE
  }
}



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
        locStorage.push(lesson_[0].lessonPage)
        await localStorage.setItem('pages', JSON.stringify(locStorage));
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
    locStorage.push(lesson)
    localStorage.setItem('pages', JSON.stringify(locStorage));
    return(
      {
        type: SET_CURRENT_LESSON,
        data: lesson,
      }
    );
  }



}
