import React, {Component} from 'react';
import {Modal, ModalHeader} from "reactstrap";

class LessonPopUp extends Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalHeader toggle={this.props.toggle}>{this.props.title} </ModalHeader>
        <img
          width="100%"
          src={this.props.image}
          alt="Lesson"
        />
      </Modal>
    );
  }
}

export default LessonPopUp;
