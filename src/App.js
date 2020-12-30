import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/store";
import "./App.scss";
import Base from "./screens/Base";


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
