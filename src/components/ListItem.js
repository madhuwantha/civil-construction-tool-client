import React, {Component} from 'react'
import ListIcon from "./ListIcon";

class ListItem extends Component {
  render() {
    return (
        <div className="row">
          <div className="col-1">
            <ListIcon click={this.props.click} number="7" />
          </div>
          <div className="col-8">
            <h5 className="list-text list-description">In publishing and placeholder text commonly used</h5>
          </div>
        </div>
    );
  }
}

export default ListItem;
