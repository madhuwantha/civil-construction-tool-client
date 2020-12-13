import  React from 'react';
import MainImageButton from "../components/MainImageButton";
import {SERVICEABILITY_CONTENT_URL, ULTIMATE_URL} from "../urls";
import {Row} from "reactstrap";

function CodeSelect(){
  return(
    <Row className="justify-content-center">
      <MainImageButton image={require('../assets/img/serviceability/code_selection/BS.jpg')}
                       click={() =>this.props.history.push(SERVICEABILITY_CONTENT_URL)}
                       class="col-md-4"/>
      <MainImageButton image={require('../assets/img/serviceability/code_selection/eurocode.jpg')}
                       click={() =>this.props.history.push(ULTIMATE_URL)}
                       class="col-md-4"/>
    </Row>
  );
}

export default CodeSelect;
