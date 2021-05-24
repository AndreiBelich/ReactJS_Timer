import React, { Component } from 'react'

class ControlButton extends Component {
  constructor(props){
    super(props);
    this.state = {
      isChange: false
    }
  }

  clickHandler = () => {
    const { isChange } = this.state;
    this.setState({
      isChange: !isChange
    });
    const [ unchangedHandler, changedHandler ] = this.props.handlers;
    if(!isChange){
      unchangedHandler();
    }else{
      changedHandler();
    }
  }

  render() {
    const { isHidden, title } = this.props.config;
    const styles = {
      display: isHidden ? "none" : ""
    };
    return (
      <button onClick={this.clickHandler} style={styles}>{title}</button>
    )
  }
}


export default ControlButton;
