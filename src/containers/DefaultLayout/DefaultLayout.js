import React, { Component, Suspense } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import * as router from "react-router-dom";
import { Container } from "reactstrap";
// import { isLoading } from "../../store/action/behavior";
// import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,
  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from "@coreui/react";
// sidebar nav config
import navigation from "../../_nav";
// routes config
import routes from "../../routes";

const DefaultAside = React.lazy(() => import("./DefaultAside"));
const DefaultFooter = React.lazy(() => import("./DefaultFooter"));
const DefaultHeader = React.lazy(() => import("./DefaultHeader"));

class DefaultLayout extends Component {
  loading = () => (
    <LoadingOverlay
  active={true}
  spinner={true}
  text="Loading..."
  styles={{
    spinner: (base) => ({
      ...base,
      marginTop: 250,
      width: "100px",
      fontColor: "black",
      "& svg circle": {
        stroke: "rgba(0, 255, 0, 1)",
      },
    }),
  }}
  />
  );
  loadingAppAside = () => (
    <LoadingOverlay
  active={true}
  spinner={true}
  styles={{
    spinner: (base) => ({
      ...base,
      marginTop: 250,
      width: "10px",
      fontColor: "black",
      "& svg circle": {
        stroke: "rgba(0, 255, 0, 1)",
      },
    }),
  }}
  />
  );

  signOut(e) {
    e.preventDefault();
    this.props.history.push("/login");
  }

  componentWillUpdate(prevProps) {
    // console.log(this.props);
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loadingAppAside()}>
            <DefaultHeader onLogout={(e) => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed display="lg">
            <AppSidebarHeader />
            <AppSidebarForm />
            <Suspense>
              <AppSidebarNav
                navConfig={navigation}
                {...this.props}
                router={router}
              />
            </Suspense>
            <AppSidebarFooter />
            <AppSidebarMinimizer />
          </AppSidebar>
          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        params={{
                          key: idx,
                          logig: route.props ? route.props.logic : null,
                        }}
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={(props) => (
                          <route.component
                            params={{
                              logic: route.props ? route.props.logic : null,
                            }}
                            {...props}
                          />
                        )}
                      />
                    ) : null;
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loadingAppAside()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loadingAppAside()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
// const mapStateToProps = (state) => {
//   // console.log(state);
//   return state;
// };

// export default connect(mapStateToProps, {
//   isLoading,
// })(DefaultLayout);
