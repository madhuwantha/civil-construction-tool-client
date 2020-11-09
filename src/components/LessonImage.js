import React, {Component} from 'react';
import Button from "reactstrap/es/Button";
import LessonPopUp from "./LessonPopUp";
import Row from "reactstrap/es/Row";

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
              <Button onClick={this.toggle} color="primary" >{button.name}</Button>
              <LessonPopUp
                isOpen={this.state.modal}
                toggle={this.toggle}
                onClick={this.toggle}
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
          <img
            className="lesson-image-card"
            width="100%"
            height="auto"
            src={this.props.img.imagePath}
            alt="Lesson"
            style={{border: this.props.img.buttons !== [] ? 'border' : '1px solid black' }}
          />
          <br/>
          {this.button_dev}
        </div>
      </div>
    );
  }
}

export default LessonImage;
