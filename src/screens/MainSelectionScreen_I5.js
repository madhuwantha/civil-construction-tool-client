import React, {Component} from 'react'
import MainImageButton from "../components/MainImageButton";
import {Row} from "reactstrap";
import {LIST_SCREEN_PAGE} from "../urls";

class MainSelectionScreen_I5 extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-around">
          <MainImageButton click={() => this.props.history.push(LIST_SCREEN_PAGE)} class="col-md-3"/>
          <MainImageButton click={() => this.props.history.push(LIST_SCREEN_PAGE)} class="col-md-3"/>
        </Row>
        <Row className="justify-content-center">
          <MainImageButton click={() => this.props.history.push(LIST_SCREEN_PAGE)} class="col-md-3"/>
        </Row>
        <Row className="justify-content-around">
          <MainImageButton click={() => this.props.history.push(LIST_SCREEN_PAGE)} class="col-md-3"/>
          <MainImageButton click={() => this.props.history.push(LIST_SCREEN_PAGE)} class="col-md-3"/>
        </Row>
      </div>
    );
  }
}


export default MainSelectionScreen_I5;
