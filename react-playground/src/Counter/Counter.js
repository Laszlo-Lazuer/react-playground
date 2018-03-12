import React, { Component } from 'react';
import './App.css';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  onIncrement = () =>
    this.setState ({
      counter: this.state.counter + 1,
    });

  onDecrement = () =>
    this.setState ({
      counter: this.state.counter - 1,
    });

  render() {
    return (
      <div>
      <h2>Counter Component Example</h2>
      <p>Counter: {this.state.counter}</p>
      <button type='button' onClick={this.onIncrement}>Increment</button>
      <button type='button' onClick={this.onDecrement}>Decrement</button>
      </div>
    );
  }
}



export default Counter;
