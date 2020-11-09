import React, {Component} from "react";
import LessonImage from "../components/LessonImage";
import {Row} from "reactstrap";
import Button from "reactstrap/es/Button";
import LessonPopUp from "../components/LessonPopUp";

const images = [
  {
  "title": "Lesson Title1",
  "imagePath": "https://source.unsplash.com/user/erondu/700x400",
  "buttons": [{"name":"Button1", "url":"https://source.unsplash.com/user/erondu/700x400", "title":"Button1 Title"},
    {"name":"Button2", "url":"https://source.unsplash.com/user/erondu/700x400", "title":"Button2 Title"},
    {"name":"Button3", "url":"https://source.unsplash.com/user/erondu/700x400", "title":"Button3 Title"},
    {"name":"Button4", "url":"https://source.unsplash.com/user/erondu/700x400", "title":"Button4 Title"}]
  },
  {
    "title": "Lesson Title2",
    "imagePath": "https://source.unsplash.com/user/erondu/700x400",
    // "buttons": [{"name":"Button21", "url":"https://source.unsplash.com/user/erondu/700x400", "title":"Button1 Title"},
    //   {"name":"Button22", "url":"https://source.unsplash.com/user/erondu/700x400", "title":"Button2 Title"},
    //   {"name":"Button23", "url":"https://source.unsplash.com/user/erondu/700x400", "title":"Button3 Title"},
    //   {"name":"Button24", "url":"https://source.unsplash.com/user/erondu/700x400", "title":"Button4 Title"}]
  }
]

class LessonsScreen extends Component {
  title_dev;
  button_dev;

  render() {
    return (
      <Row className="container-fluid">
        {images.map((image,idx)=>{
          return(
            <LessonImage key={idx} img={image}/>
          );
        })}
      </Row>
    );
  }
}

export default LessonsScreen;
