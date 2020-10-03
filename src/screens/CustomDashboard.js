import React, { Component } from "react";
import {
  Row
} from "reactstrap";

import { connect } from "react-redux";
class CustomDashboard extends Component {

  render() {
    return (
      <Row>
        <div>
          <h1>Civil construction tool</h1>
        </div>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state};
};

export default connect(mapStateToProps, { })(CustomDashboard);
