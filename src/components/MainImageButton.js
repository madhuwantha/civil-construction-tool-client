import React, {Component} from 'react'


class MainImageButton extends Component {
  render() {
    return (
      <div className={this.props.class}>
          <img onClick={this.props?.click}
               className="main-image-card" 
               width="100%"
               src="https://source.unsplash.com/user/erondu/700x400"
               alt="Card image cap"
          />
      </div>
    );
  }
}

export default MainImageButton;

