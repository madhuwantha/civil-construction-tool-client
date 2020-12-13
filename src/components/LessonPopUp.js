import React, {Component} from 'react';
import {Modal, ModalHeader} from "reactstrap";

class LessonPopUp extends Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>{this.props.title} </ModalHeader>
        {this.props.image.map((image,idx) => {
          return (
            <div>
              <img
                key={idx}
                width="100%"
                src={image}
                alt="Lesson"
              />
              <br/>
            </div>
          )
        })}
      </Modal>
    );
  }
}

export default LessonPopUp;
