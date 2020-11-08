import React, {Component} from 'react'

class ListIcon extends Component {
  render() {
    return (
      <div onClick={this.props.click} className="listIcon main-image-card">
        <h2 className="list-text">{this.props.number}</h2>
      </div>
    );
  }
}

export default ListIcon;
