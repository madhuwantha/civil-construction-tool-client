import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import {
  NotificationContainer,
} from "react-notifications";
import Loading from "../components/Loading";

import { connect } from "react-redux";
import { isLoading } from "../store/action/behavior";

// Containers
const DefaultLayout = React.lazy(() => import("../containers/DefaultLayout"));

// Pages
const Login = React.lazy(() => import("../views/Pages/Login"));
const Register = React.lazy(() => import("../views/Pages/Register"));
const Page404 = React.lazy(() => import("../views/Pages/Page404"));
const Page500 = React.lazy(() => import("../views/Pages/Page500"));

class Base extends Component {

  render() {
    return (
      <HashRouter>
        <NotificationContainer />
        <React.Suspense fallback={Loading()}>
          <Switch>
            <Route
              exact
              path="/login"
              name="Login Page"
              render={(props) => <Login {...props} />}
            />
            <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/404"
              name="Page 404"
              render={(props) => <Page404 {...props} />}
            />
            <Route
              exact
              path="/500"
              name="Page 500"
              render={(props) => <Page500 {...props} />}
            />
            <Route
              path="/"
              name="Home"
              render={(props) => <DefaultLayout {...props} />}
            />
          </Switch>
        </React.Suspense>
      </HashRouter>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return { ...state };
};

export default connect(mapStateToProps, {
  isLoading,
})(Base);
