import React, {Component} from "react";
import Display from "./components/Display";
import ControlButton from "./components/ControlButton";
import TimerHeader from "./components/TimerHeader";
import Timer from "./logic/Timer.js";
import "./App.css";

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      timer: new Timer(),
      currentTime: "00:00:00:000",
      startButton: {
        isHidden: false,
        isChange: false,
        title: "Start"
      },
      pauseButton: {
        isHidden: true,
        isChange: false,
        title: "Stop"
      }
    }
  }

  start = () => {
    this.state.timer.start(this.updateTime);
    this.setState({
      startButton: {
        title: "Reset",
        isChange: true
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
        isChange: false
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
        title: "Resume",
        isChange: true
      }
    });
  }

  restart = () => {
    this.state.timer.restart(this.updateTime);
    this.setState({
      pauseButton: {
        title: "Stop",
        isChange: false
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
      <article className="timer">
        <TimerHeader title={"My Timer"} />
        <Display currentTime={currentTime} />
        <div className="controlButtonsRow">
          <ControlButton handlers={[this.start, this.reset]} config={startButton} />
          <ControlButton handlers={[this.stop, this.restart]} config={pauseButton} />
        </div>
      </article>
    );
  }
}

export default App;

//Resume/Stop + Reset
//Start + Stop + Reset + Start + Stop