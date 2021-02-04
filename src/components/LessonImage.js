import React, {Component} from 'react';
import Button from "reactstrap/es/Button";
import LessonPopUp from "./LessonPopUp";
import {connect} from "react-redux";
import {setCurrentLesson} from "../store/action/lessonPage";
import {setCurrentMethod} from "../store/action/method";
import {setCurrentCategory} from "../store/action/category";
import {LessonQuestion} from "./LessonQuestion";

class LessonImage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal,
    });
  }

  render() {
    const {img} = this.props;
    const imgPre = img
      ? (
        img.imagePath !== "" ?
          (
            <img
              className="lesson-image-card"
              width="100%"
              height="auto"
              src={img.imagePath}
              alt="Lesson"
              style={{border: this.props.img.buttons !== [] ? 'border' : '1px solid black'}}
            />
          ) : ""
      )
      : (<p>loading</p>);

    if (this.props.img.title) {
      this.title_dev = <div className="lesson-title">{this.props.img.title}</div>
    } else {
      this.title_dev = "";
    }

    if (this.props.img.inputs) {
      this.inputs_devs =
        <div className="row lesson-button-row input-container">
          {this.props.img.inputs.map((input_, index) => {
            return (
              <LessonQuestion key={index} question={input_.question} unit={input_.unit} answer={input_.answer}/>
            )
          })}
        </div>
    } else {
      this.inputs_devs = [];
    }


    if (this.props.img.buttons) {
      this.button_dev = <div className="row lesson-button-row">
        {this.props.img.buttons.map((button, idx) => {
          return (
            <div className="col" key={idx}>
              <Button
                className="btn btn-default lesson-button"
                onClick={
                  button.lessonpageId !== "" && button.lessonpageId !== null && button.lessonpageId !== undefined
                    ? () => {
                      if (button.isCalc)
                        this.props.history.push(button.url)
                      else
                        this.props.setCurrentLesson(button.lessonpageId)
                      // button.isCalc ? () => {
                      //   this.props.history.push(button.url)
                      // } : () => this.props.setCurrentLesson(button.lessonpageId)
                      // console.log(button);
                      // button.isCalc ? {
                      //   this.props.history.push(button.url)
                      // } : this.props.setCurrentLesson(button.lessonpageId)
                      // this.props.history.pop();
                      // this.props.history.push(LESSON_PAGE)
                    }
                    : () => this.toggle()
                }
                // onClick={this.toggle}
                color="primary">{button.name}</Button>
              <LessonPopUp
                isOpen={this.state.modal}
                toggle={this.toggle}
                onClick={this.toggle}
                // onClick={
                //   button.lessonPageId !== ""
                //   ? () => this.props.history.push(LESSON_PAGE)
                //   :  this.toggle
                // }
                image={button.imagePath}
                title={button.title}
              />
            </div>
          );
        })}
      </div>
    } else {
      this.button_dev = []
    }
    return (
      <div className="col-12 lesson-image-container">
        {this.title_dev}
        <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
          {imgPre}
          {this.button_dev}
          {this.inputs_devs}
        </div>
      </div>
    );
  }
}

// export default LessonImage;

const mapStateToProps = (state) => {
  return {...state};
};

export default connect(mapStateToProps, {setCurrentLesson, setCurrentMethod, setCurrentCategory})(LessonImage);
