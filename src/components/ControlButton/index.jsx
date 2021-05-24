import React, { Component } from 'react'
import "./ControlButton.css";

class ControlButton extends Component {

  clickHandler = () => {
    const { isChange } = this.props.config;
    const [ unchangedHandler, changedHandler ] = this.props.handlers;
    if(isChange){
      changedHandler();
    }else{
      unchangedHandler();
    }
  }

  render() {
    const { isHidden, title } = this.props.config;
    const styles = {
      display: isHidden ? "none" : ""
    };
    return (
      <button onClick={this.clickHandler} className="controlButton" style={styles}>{title}</button>
    )
  }
}


export default ControlButton;
