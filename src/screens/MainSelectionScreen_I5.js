import React, {Component} from 'react'
import MainImageButton from "../components/MainImageButton";
import {Row} from "reactstrap";
import {
  CALCULATION_ULTIMATE_FLEX_FLANGE,
  CALCULATION_ULTIMATE_FLEX_RECT,
  CALCULATION_ULTIMATE_SHARING,
  CODE_SELECTION,
  LESSON_PAGE
} from "../urls";

import { connect } from "react-redux";
import {setCurrentLesson} from '../store/action/lessonPage';
import {setCurrentMethod} from '../store/action/method';
import {setCurrentCategory} from "../store/action/category";
import {CALCULATION, LESSON} from "../constance/method";
import { ULTIMATE_LIMIT_STATE} from "../constance/dataFiles";
import {SHEAR,FLEXURE} from "../constance/category";

class MainSelectionScreen_I5 extends Component {
  render() {
    return (
      <div>
        <Row className="justify-content-around">
          <MainImageButton
            image={require('../assets/img/ultimate/content/learn_shear.jpeg')}
            click={() => {
            this.props.setCurrentMethod(LESSON);
            this.props.setCurrentCategory(SHEAR);
            this.props.history.push(CODE_SELECTION)
          }} class="col-md-3"/>
          <MainImageButton
            image={require('../assets/img/ultimate/content/learn_flexure.jpeg')}
            click={() => {
            this.props.setCurrentMethod(LESSON);
            this.props.setCurrentCategory(FLEXURE);
            this.props.history.push(CODE_SELECTION)
          }} class="col-md-3"/>
        </Row>
        <Row className="justify-content-center">
          <MainImageButton
            image={require('../assets/img/ultimate/content/ULSlogo.JPG')}
            click={() => {
            this.props.setCurrentLesson(ULTIMATE_LIMIT_STATE)
            this.props.history.push(LESSON_PAGE);
          }} class="col-md-3"/>
        </Row>
        <Row className="justify-content-around">
          <MainImageButton
            image={require('../assets/img/ultimate/content/shear_capacity_and_shear_reinforcement_calculator.jpeg')}
            click={() => {
            this.props.setCurrentMethod(CALCULATION);
            this.props.setCurrentCategory(SHEAR);
            this.props.history.push(CALCULATION_ULTIMATE_SHARING)
          }} class="col-md-3"/>
          <MainImageButton
            image={require('../assets/img/ultimate/content/flexural_reinforcement_calculator.jpeg')}
            click={() => {
            this.props.setCurrentMethod(CALCULATION);
              this.props.setCurrentCategory(FLEXURE);
            this.props.history.push(CALCULATION_ULTIMATE_FLEX_FLANGE)
          }} class="col-md-3"/>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {currentLesson: state.lessonPage.currentLesson };
};

export default connect(mapStateToProps, { setCurrentLesson,setCurrentMethod,setCurrentCategory })(MainSelectionScreen_I5);
