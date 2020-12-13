import React, { Component } from "react";

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";


import departmentReducer from "./store/reducer/department";
import behaviorReducer from "./store/reducer/behavior";
import paginationReducer from "./store/reducer/pagination";
import LessonPageReducer from "./store/reducer/lessonPage";
import methodReducer from "./store/reducer/method";
import codeReducer from "./store/reducer/code";
import categoryReducer from "./store/reducer/category";

import "./App.scss";

import Base from "./screens/Base";

const rootReducer = combineReducers({
  department: departmentReducer,
  behavior: behaviorReducer,
  pagination: paginationReducer,
  lessonPage: LessonPageReducer,
  method: methodReducer,
  code: codeReducer,
  category: categoryReducer

});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

class App extends Component {


  render() {
    return (
      <Provider store={store}>
        <Base {...this.props} />
      </Provider>
    );
  }
}

export default App;
