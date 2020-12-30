import React, {Component} from 'react'
import MainImageButton from "../components/MainImageButton";
import {
  CODE_SELECTION,
  COMPARE_PAGE,
  LESSON_PAGE,
} from "../urls";

import { connect } from "react-redux";
import {setCurrentLesson} from '../store/action/lessonPage';
import {setCurrentCategory} from "../store/action/category";
import {setCurrentMethod} from '../store/action/method';
import {
  LESSON_SERVICEABILITY_LIMIT_STATE
} from "../constance/dataFiles";
import {CALCULATION, LESSON} from "../constance/method";
import {CRACK_WIDTH, DEFLECTION} from "../constance/category";

class CategoryScreenServiceability extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageOne: require('../assets/img/serviceability/content/learn_how_to_calculate_crack_width.jpg'),
      imageTwo: require('../assets/img/serviceability/content/crack_width_calculator.jpg'),
      imageThree: require('../assets/img/serviceability/content/what_is_servicibility_limit_state.jpg'),
      imageFour: require('../assets/img/serviceability/content/compare_crack_width _ deflection.jpg'),
      imageFive: require('../assets/img/serviceability/content/learn_how_to_calculate_deflection.jpg'),
      imageSix: require('../assets/img/serviceability/content/deflection_calclator.jpg')
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <br/>
            <MainImageButton image={this.state.imageOne}
                             click={() => {
                               this.props.setCurrentMethod(LESSON);
                               this.props.setCurrentCategory(CRACK_WIDTH);
                               this.props.history.push(CODE_SELECTION)
                             }}
                             class=""/>
            <br/>
            <MainImageButton image={this.state.imageTwo}
                             click={() => {
                               this.props.setCurrentMethod(CALCULATION);
                               this.props.setCurrentCategory(CRACK_WIDTH);
                               this.props.history.push(CODE_SELECTION)
                             }}
                             class=""/>
          </div>
          <div className="col-sm">
            <MainImageButton image={this.state.imageThree}
                             click={() => {
                               this.props.setCurrentLesson(LESSON_SERVICEABILITY_LIMIT_STATE)
                               this.props.history.push(LESSON_PAGE);
                             }}
                             class=""/>
            <br/>
            <MainImageButton image={this.state.imageFour}
                             click={() => this.props.history.push(COMPARE_PAGE)}
                             class=""/>
          </div>
          <div className="col-sm">
            <br/>
            <MainImageButton image={this.state.imageFive}
                             click={() => {
                               this.props.setCurrentCategory(DEFLECTION);
                               this.props.setCurrentMethod(LESSON);
                               this.props.history.push(CODE_SELECTION)
                             }}
                             class=""/>
            <br/>
            <MainImageButton image={this.state.imageSix}
                             click={() => {
                               this.props.setCurrentCategory(DEFLECTION);
                               this.props.setCurrentMethod(CALCULATION);
                               this.props.history.push(CODE_SELECTION)
                             }}
                             class=""/>
          </div>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {currentLesson: state.lessonPage.currentLesson };
};

export default connect(mapStateToProps, { setCurrentLesson,setCurrentMethod,setCurrentCategory })(CategoryScreenServiceability);
