import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";


import departmentReducer from "./reducer/department";
import behaviorReducer from "./reducer/behavior";
import paginationReducer from "./reducer/pagination";
import LessonPageReducer from "./reducer/lessonPage";
import methodReducer from "./reducer/method";
import codeReducer from "./reducer/code";
import categoryReducer from "./reducer/category";
import limitStateReducer from "./reducer/designLimitState";
import calculationPageReducer from "./reducer/calculationPage";

const rootReducer = combineReducers({
  department: departmentReducer,
  behavior: behaviorReducer,
  pagination: paginationReducer,
  lessonPage: LessonPageReducer,
  method: methodReducer,
  code: codeReducer,
  category: categoryReducer,
  limitState:limitStateReducer,
  calculationPage:calculationPageReducer

});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

export default store;
