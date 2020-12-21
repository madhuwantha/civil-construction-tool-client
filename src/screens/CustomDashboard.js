import React, {Component} from "react";
import {
  Row
} from "reactstrap";

import {connect} from "react-redux";
import MainImageButton from "../components/MainImageButton";
import {SERVICEABILITY_CONTENT_URL, ULTIMATE_URL} from "../urls";
import {setCurrentLimitState} from "../store/action/designLimitState";
import {SERVICEABILITY, ULTIMATE} from "../constance/designLimitState";

class CustomDashboard extends Component {

  render() {
    return (
      // <CodeSelect {...this.props}/>
      <Row className="justify-content-center">
            <MainImageButton image={require('../assets/img/dashboard/limit_state_of_serviceability.jpg')}
                             click={() =>{
                               this.props.setCurrentLimitState(SERVICEABILITY)
                               this.props.history.push(SERVICEABILITY_CONTENT_URL)
                             }}
                             class="col-md-4"/>
            <MainImageButton image={require('../assets/img/dashboard/ultimate_limite_state.jpg')}
                             click={() =>{
                               this.props.setCurrentLimitState(ULTIMATE)
                               this.props.history.push(ULTIMATE_URL)
                             }}
                             class="col-md-4"/>
            {/*<MainImageButton click={() =>{}} class="col-md-4"/>*/}
      </Row>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
};

export default connect(mapStateToProps, {setCurrentLimitState})(CustomDashboard);
