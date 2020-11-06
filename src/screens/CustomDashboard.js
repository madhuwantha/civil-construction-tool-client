import React, {Component} from "react";
import {
  Row
} from "reactstrap";

import {connect} from "react-redux";
import MainImageButton from "../components/MainImageButton";
import {SERVICEABILITY_CONTENT_URL, MAIN_SELECTION_THREE, ULTIMATE_URL} from "../urls";

class CustomDashboard extends Component {

  render() {
    return (
      <Row>
            <MainImageButton image={require('../assets/img/dashboard/limit_state_of_serviceability.jpg')}
                             click={() =>this.props.history.push(SERVICEABILITY_CONTENT_URL)}
                             class="col-md-4"/>
            <MainImageButton image={require('../assets/img/dashboard/ultimate_limite_state.jpg')}
                             click={() =>this.props.history.push(ULTIMATE_URL)}
                             class="col-md-4"/>
            <MainImageButton click={() =>{}} class="col-md-4"/>
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
};

export default connect(mapStateToProps, {})(CustomDashboard);
