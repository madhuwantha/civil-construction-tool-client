import React, {Component} from "react";
import LessonImage from "../components/LessonImage";
import {Row} from "reactstrap";

const images = [ "https://source.unsplash.com/user/erondu/700x400","https://source.unsplash.com/user/erondu/700x400"];

class LessonsScreen extends Component {

  render() {
    return (
      <Row className="container-fluid">
        {images.map((image,idx)=>{
          return  <LessonImage img={image}/>;
        })}
      </Row>
    );
  }
}

export default LessonsScreen;
