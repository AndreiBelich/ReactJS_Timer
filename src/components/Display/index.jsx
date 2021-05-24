import React, { Component } from 'react'
import "./Display.css";
class Display extends Component {

  render() {
    const { currentTime } = this.props;
    return (
      <div className="display">
        {currentTime}
      </div>
    )
  }
}

export default Display;
