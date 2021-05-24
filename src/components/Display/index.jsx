import React, { Component } from 'react'

class Display extends Component {

  render() {
    const { currentTime } = this.props;
    return (
      <div>
        Time is: {currentTime}
      </div>
    )
  }
}

export default Display;
