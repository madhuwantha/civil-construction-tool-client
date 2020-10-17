import React, {Component} from 'react'
import MainImageButton from "../components/MainImageButton";
import {Row} from "reactstrap";
import {LESSON_PAGE} from "../urls";

class MainSelectionScreen extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-around">
          <MainImageButton click={() => this.props.history.push(LESSON_PAGE)} class="col-md-3"/>
          <MainImageButton click={() => this.props.history.push(LESSON_PAGE)} class="col-md-3"/>
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
