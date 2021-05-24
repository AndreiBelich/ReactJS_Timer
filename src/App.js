import React, {Component} from "react";
import Display from "./components/Display";
import ControlButton from "./components/ControlButton";
import Timer from "./logic/Timer.js";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      timer: new Timer(),
      currentTime: "00:00:00:000",
      startButton: {
        isHidden: false,
        title: "Start"
      },
      pauseButton: {
        isHidden: true,
        title: "Stop"
      }
    }
  }

  start = () => {
    this.state.timer.start(this.updateTime);
    this.setState({
      startButton: {
        title: "Reset",
      },
      pauseButton: {
        isHidden: false,
        title: "Stop"
      }
    });
  }

  reset = () => {
    this.state.timer.reset();
    this.setState({
      currentTime: "00:00:00:000",
      startButton: {
        title: "Start",
      },
      pauseButton: {
        isHidden: true
      }
    });
  }

  stop = () => {
    this.state.timer.stop();
    this.setState({
      pauseButton: {
        title: "Resume"
      }
    });
  }

  restart = () => {
    this.state.timer.restart(this.updateTime);
    this.setState({
      pauseButton: {
        title: "Stop"
      }
    });
  }

  updateTime = () =>{
    this.setState({
      currentTime: this.state.timer.getTime()
    });
  }

  render(){
    const { startButton, pauseButton, currentTime } = this.state;
    return (
      <>
        <div>My Timer</div>
        <Display currentTime={currentTime} />
        <ControlButton handlers={[this.start, this.reset]} config={startButton} />
        <ControlButton handlers={[this.stop, this.restart]} config={pauseButton} />
      </>
    );
  }
}

export default App;

//