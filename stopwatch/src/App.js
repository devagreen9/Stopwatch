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

  timer(e) {
    e.preventDefault();
    const buttonClicked = e.target.id;
    if(buttonClicked === 'start') {
      let id = setInterval(this.startTimer, 1000);
      this.setState({ clearId: id });
    } else if(buttonClicked === 'reset') {
      this.setState({ time: 0 });
    } else if(buttonClicked === 'pause') {
      clearInterval(this.state.clearId);
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
         <form onClick={ this.timer }>
            <button id='start'>Start</button>
            <button id='pause'>Pause</button>
            <button id='reset'>Reset</button>
          </form>
      </div>
    );
  }
  }
