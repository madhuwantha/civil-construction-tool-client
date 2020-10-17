import React, {Component} from 'react'
import MainImageButton from "../components/MainImageButton";
import {Row} from "reactstrap";

class MainSelectionScreen extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-around">
          <MainImageButton class="col-md-3"/>
          <MainImageButton class="col-md-3"/>
        </Row>
        <Row className="justify-content-center">
          <MainImageButton class="col-md-3"/>
        </Row>
        <Row className="justify-content-around">
          <MainImageButton class="col-md-3"/>
          <MainImageButton class="col-md-3"/>
        </Row>
      </div>
    );
  }
}


export default MainSelectionScreen;
