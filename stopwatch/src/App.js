// Allows the user to press a button "Start" to start the stopwatch
// While the stopwatch is started, the incrementing time should be displayed
// Allows the user to press a button "Pause" to pause the stopwatch at the current time
// Re-clicking the "Pause" button rmshould resume the stopwatch
// Allows the user to press a button "Reset" to stop the stopwatch and reset the time to 0

// State to keep track of the time 
// onClick function has to be attached
// form is -> onclick
// onclick function -> look which button I chose. -> if button chosen === 'start' -> startfunction

// Set stopwatch to 0;
// For Start, onClick, stopwatch incriments by 1 continuously
  // If Pause is pressed, 
    // For Pause, onClick, stopwatch pauses 
  // If Restart is pressed, 
    // For Restart, onClick, stopwatch resets the seconds 
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: 0,
      clearId: null
    };
  }

  this.timer = this.timer.bind(this);
  this.startTimer = this.startTimer.bind(this);

  timer(e) {  // e = event
    e.preventDefault(); // stops the page from refreshing 
    const buttonClicked = e.target.id;
    // console.log(buttonClicked);
    if(buttonClicked === 'start') {
      setInterval(this.startTimer, 1000);
    } else if(buttonClicked === 'reset') {
      this.setState({ time: 0});
    } else if(buttonClicked === 'pause') {
      clearId;
    }
  }

  // start function -> when button click I have to increase seconds/time
      // how do I increase time
      // setInterval() to be invoked onClick
  startTimer() {

    function add() {
      this.setState({ time: state.time + 1 }) 
    }
    setInterval(this.setState({ time: this.state.time + 1}), 1000);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
    <h1>{  }</h1>
          <form onClick={ this.timer }>
            <button id='start'>Start</button>
            <button id='pause'>Pause</button>
            <button id='reset'>Reset</button>
          </form>
        </header>
      </div>
    );
  }
  }
  

export default App;
