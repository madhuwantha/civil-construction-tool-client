import React, {Component} from 'react'
import MainImageButton from "../components/MainImageButton";
import {
  CALCULATION_PAGE,
  COMPARE_PAGE,
  LESSON_PAGE,
  LIST_SCREEN_PAGE,
  SERVICEABILITY_CODE_APPROACHES_URL
} from "../urls";
import {LESSON_SERVICEABILITY_LIMIT_STATE} from "../constance/dataFiles";

class CategoryScreen_6 extends Component {
  constructor(props) {
    super(props);
    if (this.props.params.logic === "CONTENT"){
      this.state = {
        imageOne: require('../assets/img/serviceability/content/learn_how_to_calculate_crack_width.jpg'),
        imageTwo: require('../assets/img/serviceability/content/crack_width_calculator.jpg'),
        imageThree: require('../assets/img/serviceability/content/what_is_servicibility_limit_state.jpg'),
        imageFour: require('../assets/img/serviceability/content/compare_crack_width _ deflection.jpg'),
        imageFive: require('../assets/img/serviceability/content/learn_how_to_calculate_deflection.jpg'),
        imageSix: require('../assets/img/serviceability/content/deflection_calclator.jpg')
      }
    }else if (this.props.params.logic === "CODE_APPROACHES"){
      this.state = {
        imageOne: require('../assets/img/serviceability/code_selection/jsce.jpg'),
        imageTwo: require('../assets/img/serviceability/code_selection/eurocode.jpg'),
        imageThree: require('../assets/img/serviceability/code_selection/ceb.jpg'),
        imageFour: require('../assets/img/serviceability/code_selection/s7.jpg'),
        imageFive: require('../assets/img/serviceability/code_selection/BS.jpg'),
        imageSix: require('../assets/img/serviceability/code_selection/aci.jpg')
      }
    }
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <br/>
            <MainImageButton image={this.state.imageOne}
                             click={() => this.props.history.push(
                               this.props.params.logic === "CONTENT"
                                 ? {
                                   pathname: SERVICEABILITY_CODE_APPROACHES_URL,
                                   search: null,
                                   state: { isCalculate: false }
                                 }
                                 : this.props.location.state?.isCalculate
                                 ? {
                                   pathname: CALCULATION_PAGE,
                                   search: null,
                                   state: { data: null }
                                 }: {
                                   pathname: LIST_SCREEN_PAGE,
                                   search: null,
                                   state: { data: null }
                                 }
                             )} class=""
            /><br/>
            <MainImageButton image={this.state.imageTwo}
                             click={() => this.props.history.push(
                               this.props.params.logic === "CONTENT"
                                 ? SERVICEABILITY_CODE_APPROACHES_URL
                                 : LIST_SCREEN_PAGE
                             )} class=""
            />
          </div>
          <div className="col-sm">
            <MainImageButton image={this.state.imageThree}
                             click={() => this.props.history.push(
                               {
                                 pathname: this.props.params.logic === "CONTENT"
                                   ? LESSON_PAGE
                                   : LIST_SCREEN_PAGE,
                                 state: {data: LESSON_SERVICEABILITY_LIMIT_STATE}
                               }
                             )} class=""
            /><br/>
            <MainImageButton image={this.state.imageFour}
                             click={() => this.props.params.logic === "CONTENT"
                               ? this.props.history.push(COMPARE_PAGE)
                               : {}} class=""/>
          </div>
          <div className="col-sm">
            <br/>
            <MainImageButton image={this.state.imageFive}
                             click={() => this.props.history.push(
                               this.props.params.logic === "CONTENT"
                                 ? SERVICEABILITY_CODE_APPROACHES_URL
                                 : LIST_SCREEN_PAGE
                             )} class=""
            /><br/>
            <MainImageButton image={this.state.imageSix}
                             click={() => this.props.history.push(
                               this.props.params.logic === "CONTENT"
                                 ? SERVICEABILITY_CODE_APPROACHES_URL
                                 : LIST_SCREEN_PAGE
                             )} class=""
            />
          </div>
        </div>
      </div>

    );
  }
}


export default CategoryScreen_6;
