import React, {Component} from "react";
import LessonImage from "../components/LessonImage";
import {Row} from "reactstrap";

import * as lesson from '../data/lesson/lesson'

const images = [
  // {
  // "title": "Lesson Title1",
  // "imagePath": "https://source.unsplash.com/user/erondu/700x400",
  // "buttons": [
  //   {"name":"Button1", "url":"","title":"Button1 Title","lessonPageId": "csdcsd"},
  //   {"name":"Button2", "url":"https://source.unsplash.com/user/erondu/700x400", "title":"Button2 Title", "lessonPageId": ""},
  //   {"name":"Button3", "url":"https://source.unsplash.com/user/erondu/700x400", "title":"Button3 Title", "lessonPageId":""},
  //   {"name":"Button4", "url":"https://source.unsplash.com/user/erondu/700x400", "title":"Button4 Title", "lessonPageId": ""}
  //   ]
  // },
  // {
  //   "title": "Lesson Title2",
  //   "imagePath": "https://source.unsplash.com/user/erondu/700x400",
  //  }
]

class LessonsScreen extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      data : [],
      path: props.location.state["data"]
    }

    lesson[this.state.path]
      .then(d => {
        this.setState(
          {
            data : d.default.images
          }
        )
      }).catch((e) => {
        console.log(e);
    })

  }

  render() {
    return (
      <Row className="container-fluid">
        {this.state.data.map((image,idx)=>{
          return(
            <LessonImage {...this.props} key={idx} img={image}/>
          );
        })}
      </Row>
    );
  }
}

export default LessonsScreen;
