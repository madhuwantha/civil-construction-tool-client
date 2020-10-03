import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";


import departmentReducer from "./store/reducer/department";
import behaviorReducer from "./store/reducer/behavior";
import paginationReducer from "./store/reducer/pagination";

import "./App.scss";

import Base from "./screens/Base";

const rootReducer = combineReducers({
  department: departmentReducer,
  behavior: behaviorReducer,
  pagination: paginationReducer
});
const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <Base {...this.props} />
      </Provider>
    );
  }
}

export default App;
