import React, {Component} from 'react'


class MainImageButton extends Component {
  render() {
    return (
      <div className={this.props.class}>
          <img onClick={this.props?.click}
               className="main-image-card"
               width="100%"
               src={this.props.image ? this.props.image : "https://source.unsplash.com/user/erondu/700x400"}
               // src="../assets/img/brand/button.jpg"
               alt="Card cap"
          />
      </div>
    );
  }
}

export default MainImageButton;

