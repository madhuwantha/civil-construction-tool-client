import React, {Component} from 'react'
import ListItem from "../components/ListItem";
import {LESSON_PAGE} from "../urls";

class ListScreen extends Component {
  render() {
    return (
      <div>
        <ListItem click={() => this.props.history.push(LESSON_PAGE)} /><br/>
        <ListItem click={() => this.props.history.push(LESSON_PAGE)} /><br/>
        <ListItem click={() => this.props.history.push(LESSON_PAGE)} /><br/>
        <ListItem click={() => this.props.history.push(LESSON_PAGE)} /><br/>
      </div>
    );
  }
}
export default ListScreen;
