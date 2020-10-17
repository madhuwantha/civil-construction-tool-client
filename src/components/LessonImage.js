import React, {Component} from 'react';

class LessonImage extends Component {
  render() {
    return (
      <div className="col-12" >
        <img
             className="lesson-image-card"
             width="100%"
             src={this.props.img}
             alt="Lesson"
        />
      </div>
    );
  }
}

export default LessonImage;
