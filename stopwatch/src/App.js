import React from 'react';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      clearId: null
    };

    this.timer = this.timer.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.pause = this.pause.bind(this);
  }

  // timer(e) {  // e = event
  //   e.preventDefault(); // stops the page from refreshing 
  //   const buttonClicked = e.target.id;
  //   // console.log(buttonClicked);
  //   if(buttonClicked === 'start') {
  //     setInterval(this.startTimer, 1000);
  //   } else if(buttonClicked === 'reset') {
  //     this.setState({ time: 0});
  //   } else if(buttonClicked === 'pause') {
  //     clearId;
  //   }
  // }

  timer(e) { // e = event
    e.preventDefault(); // stops the page from refreshing
    const buttonClicked = e.target.id;
    // console.log(buttonClicked);
    if(buttonClicked === 'start') {
      let id = setInterval(this.startTimer, 1000); //the setInterval() method will execute the "myTimer" function once every 1 second
      this.setState({ clearId: id });
    } else if(buttonClicked === 'reset') {
      this.setState({ time: 0 });
    } else if(buttonClicked === 'pause') {
       // The clearInterval() method clears a timer set with the setInterval() method.
      // The ID value returned by setInterval() is used as the parameter for the clearInterval() method.
      // Note: To be able to use the clearInterval() method, you must use a variable when creating the interval method:
    }
  }

  // This was supposed to restart the button after it was paused
  pause(e) {
    e.preventDefault = e.target.id;
    const pauseButton = e.target.id;
    var refreshIntervalId = null;
    refreshIntervalId = setInterval(this.state, 1000);
    if(pauseButton === 'pause') {
      let pause = clearInterval;
      this.setState({ clearId: pause });
      clearInterval(this.state.clearId)
    } else{
      clearInterval(refreshIntervalId);
    }
  }

  // start function -> when button click I have to increase seconds/time
      // how do I increase time
      // setInterval() to be invoked onClick
  startTimer() {

    // function add() {
    //   this.setState({ time: state.time + 1 }) 
    // }
    // setInterval(this.setState({ time: this.state.time + 1}), 1000);
    this.setState({ time: this.state.time + 1 });
  }

  render() {
    return (
      <div className="App">
        <h1>{ this.state.time }</h1>
         <div>
            <button id='start' onClick={ this.timer }>Start</button>
            <button id='pause' onClick={ this.pause }>Pause</button>
            <button id='reset' onClick={ this.timer }>Reset</button>
          </div>
      </div>
    );
  }
  }
