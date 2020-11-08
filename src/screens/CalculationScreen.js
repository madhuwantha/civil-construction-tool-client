import React, {Component} from 'react'
import {LESSON_PAGE} from "../urls";
import MainImageButton from "../components/MainImageButton";

class CalculationScreen extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-8">
          <div className="row">
            <div className="col-6">
              <h6>In publishing and placeholder text commonly used</h6>
            </div>
            <div className="col-4">
              <input type="text" className="form-control" placeholder="input" aria-label="Username"
                     aria-describedby="basic-addon1"/>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>In publishing and placeholder text commonly used</h6>
            </div>
            <div className="col-4">
              <input type="text" className="form-control" placeholder="input" aria-label="Username"
                     aria-describedby="basic-addon1"/>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>In publishing and placeholder text commonly used</h6>
            </div>
            <div className="col-4">
              <input type="text" className="form-control" placeholder="input" aria-label="Username"
                     aria-describedby="basic-addon1"/>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <h6>In publishing and placeholder text commonly used</h6>
            </div>
            <div className="col-4">
              <input type="text" className="form-control" placeholder="input" aria-label="Username"
                     aria-describedby="basic-addon1"/>
            </div>
          </div>
        </div>
        <div className="col-4">
          <MainImageButton click={() => this.props.history.push(LESSON_PAGE)} class=""/>
          <br/>
          <MainImageButton click={() => this.props.history.push(LESSON_PAGE)} class=""/>
        </div>
      </div>
    );
  }
}

export default CalculationScreen;
