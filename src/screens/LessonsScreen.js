import React, {Component} from "react";
import LessonImage from "../components/LessonImage";
import {Row} from "reactstrap";
import Button from "reactstrap/es/Button";
import LessonPopUp from "../components/LessonPopUp";

const images = [ "https://source.unsplash.com/user/erondu/700x400","https://source.unsplash.com/user/erondu/700x400"];
const title = "Lesson Title"
// const buttons = []
const buttons = [{"name":"Button1", "url":"https://source.unsplash.com/user/erondu/700x400", "title":"Popup Title"},
                 {"name":"Button2", "url":"https://source.unsplash.com/user/erondu/700x400"},
                 {"name":"Button3", "url":"https://source.unsplash.com/user/erondu/700x400"},
                 {"name":"Button4", "url":"https://source.unsplash.com/user/erondu/700x400"}]
class LessonsScreen extends Component {
  title_dev;
  button_dev;

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
    if (title){
      this.title_dev = <div className="lesson-title">{title}</div>
    }
    else {
      this.title_dev = "";
    }
    if (buttons){
      this.button_dev = <div className="lesson-button">
        {buttons.map((button,idx) => {
          return(
            <div className="lesson-button">
              <Button onClick={this.toggle} color="primary">{button.name}</Button>
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
      <Row className="container-fluid">
        {this.title_dev}
        {images.map((image,idx)=>{
          return(
            <LessonImage key={idx} img={image}/>
          );
        })}
        {this.button_dev}
      </Row>
    );
  }
}

export default LessonsScreen;
