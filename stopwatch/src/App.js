import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      color: 'purple',
      clickCounter: 0
    }
  }
 
  onChange = (e) => {
    this.setState({
      color: 'orange',
      clickCounter: this.state.clickCounter + 1
    })
    console.log('click counter ===>', this.state.clickCounter)
  }
  
  onNextChange = (e) => {
    this.setState({
      color: 'purple',
      clickCounter: this.state.clickCounter + 1
    })
    console.log('click counter ===>', this.state.clickCounter)
  }


  render() {
    return (
      <div className='App'>
        <h1>Box Color Change</h1>
        <div className='colorBox' style={{backgroundColor: this.state.color}}
        
        >
        </div>
        <div className='buttons'>
          <button onClick={this.onChange} >Click Me!</button>
          <button onClick={this.onNextChange}>No! Click Me!</button>
        </div>
      </div>
    )
  }
}