class Timer{

  static MILLISECONDS_PER_SECOND = 1000;
  static MILLISECONDS_PER_MINUTE = Timer.MILLISECONDS_PER_SECOND * 60;
  static MILLISECONDS_PER_HOUR = Timer.MILLISECONDS_PER_MINUTE * 60;
  static SECONDS_PER_MINUTE = 60;
  static MINUTES_PER_HOUR = 60;
  static HOURS_PER_DAY = 24;
  static TIMER_DEFAULT_DELAY = 10;

  constructor(delay = Timer.TIMER_DEFAULT_DELAY){
    this._currentMilliseconds = 0;
    this._timerID = null;
    this.delay = delay;
  }

  set delay(newValue){
    if(typeof(newValue) !== "number" ){
      throw new TypeError("Type of value must be number");
    }
    if(newValue < 1){
      this._delay = Timer.TIMER_DEFAULT_DELAY;
    }
    this._delay = newValue;
  }

  get delay(){
    return this._delay;
  }

  _clearTimerId(){
    if(this._timerID){
      clearInterval(this._timerID);
    }
    this._timerID = null;
  }

  _getCorrectValue(value){
    return value < 10 ? `0${value}` : value;
  }

  _getCorrectMilliseconds(value){
    if(value < 10){
      return `00${value}`;
    }
    if(value > 9 && value < 100){
      return `0${value}`;
    }
    return value;
  }

  start(handler, savedTime = 0){
    console.log("Start timer");
    const startDate = new Date().getTime();
    this._timerID = setInterval(() => {
      const currentDate = new Date().getTime();
      this._currentMilliseconds = currentDate - startDate + savedTime;
      handler();
    }, this.delay);
  }

  stop(){
    console.log("Stop timer");
    this._clearTimerId();
  }

  restart(handler){
    console.log("Restart timer");
    this.start(handler, this._currentMilliseconds);
  }

  reset(){
    console.log("Reset timer");
    this._currentMilliseconds = 0;
    this._clearTimerId();
  }

  getTime(){
    const milliseconds = this._getCorrectMilliseconds(this._currentMilliseconds % Timer.MILLISECONDS_PER_SECOND);
    const seconds = this._getCorrectValue(Math.floor(this._currentMilliseconds / Timer.MILLISECONDS_PER_SECOND) % Timer.SECONDS_PER_MINUTE);
    const minutes = this._getCorrectValue(Math.floor(this._currentMilliseconds / Timer.MILLISECONDS_PER_MINUTE) % Timer.MINUTES_PER_HOUR);
    const hours = this._getCorrectValue(Math.floor(this._currentMilliseconds / Timer.MILLISECONDS_PER_HOUR));
    return `${hours}:${minutes}:${seconds}:${milliseconds}`;
  }
}

export default Timer;