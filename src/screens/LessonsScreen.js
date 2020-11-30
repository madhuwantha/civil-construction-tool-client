import React, {Component} from "react";
import LessonImage from "../components/LessonImage";
import {Row} from "reactstrap";

import * as lesson from '../data/lesson/lesson'


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
