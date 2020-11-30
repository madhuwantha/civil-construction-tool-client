import React, {Component} from 'react';
import Button from "reactstrap/es/Button";
import LessonPopUp from "./LessonPopUp";
import {LESSON_PAGE} from "../urls";

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

    const { img } = this.props;
    // const image = require(img.imagePath);
    const imgPre = img
      ? (
        <img
          className="lesson-image-card"
          width="100%"
          height="auto"
          src={img.imagePath}
          alt="Lesson"
          style={{border: this.props.img.buttons !== [] ? 'border' : '1px solid black' }}
        />
      )
      : (<p>loading</p>);



    if (this.props.img.title){
      this.title_dev = <div className="lesson-title">{this.props.img.title}</div>
    }
    else {
      this.title_dev = "";
    }
    if (this.props.img.buttons){
      this.button_dev = <div>
        {this.props.img.buttons.map((button,idx) => {
          return(
            <div>
              <Button
                onClick={
                  button.lessonPageId !== ""
                    ? () => this.props.history.push(LESSON_PAGE)
                    : () =>  this.toggle()
                }
                // onClick={this.toggle}
                color="primary" >{button.name}</Button>
              <LessonPopUp
                isOpen={this.state.modal}
                toggle={this.toggle}
                // onClick={this.toggle}
                onClick={
                  button.lessonPageId != ""
                  ? () => this.props.history.push(LESSON_PAGE)
                  :  this.toggle
                }
                image={button.url}
                title={button.title}
              />
            </div>
          );
        })}
      </div>
    }
    else {
      this.button_dev = []
    }
    return (
      <div className="col-12 lesson-image-container">
        {this.title_dev}
        <div style={{"border": "1px solid black"}} className="col-12 lesson-image-container">
          {imgPre}
          {/*<img*/}
          {/*  className="lesson-image-card"*/}
          {/*  width="100%"*/}
          {/*  height="auto"*/}
          {/*  src={require(`${img.imagePath}`)}*/}
          {/*  alt="Lesson"*/}
          {/*  style={{border: this.props.img.buttons !== [] ? 'border' : '1px solid black' }}*/}
          {/*/>*/}
          <br/>
          {this.button_dev}
        </div>
      </div>
    );
  }
}

export default LessonImage;
