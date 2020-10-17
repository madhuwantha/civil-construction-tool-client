import React, {Component} from "react";
import {
  Row
} from "reactstrap";

import {connect} from "react-redux";
import MainImageButton from "../components/MainImageButton";
import {MAIN_SELECTION_ONE, MAIN_SELECTION_THREE, MAIN_SELECTION_TWO} from "../urls";

class CustomDashboard extends Component {

  render() {
    return (
      <Row>
            <MainImageButton click={() =>this.props.history.push(MAIN_SELECTION_ONE)} class="col-md-4"/>
            <MainImageButton click={() =>this.props.history.push(MAIN_SELECTION_TWO)} class="col-md-4"/>
            <MainImageButton click={() =>this.props.history.push(MAIN_SELECTION_THREE)} class="col-md-4"/>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
};

export default connect(mapStateToProps, {})(CustomDashboard);
