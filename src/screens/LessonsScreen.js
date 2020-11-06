import React, {Component} from "react";
import LessonImage from "../components/LessonImage";
import {Row} from "reactstrap";

const images = [ "https://source.unsplash.com/user/erondu/700x400","https://source.unsplash.com/user/erondu/700x400"];
const title = "Lesson Title"
const buttons = [["Button1","https://source.unsplash.com/user/erondu/700x400"]]

class LessonsScreen extends Component {
  title_dev;
  button_dev;

  render() {
    if (title){
      this.title_dev = <div className="lesson-title">{title}</div>
    }
    else {
      this.title_dev = "";
    }
    if (buttons){
      this.button_dev = <button className="btn btn-block btn-primary" type="button">Primary</button>
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
