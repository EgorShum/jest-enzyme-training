import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }
  onIncrement = () => {
    const { counter } = this.state;
    this.setState({ counter: counter + 1 });
  };
  onDecrement = () => {
    const { counter } = this.state;
    this.setState({ counter: counter - 1 });
  };
  render() {
    const { counter } = this.state;
    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The counter is currently: {counter}</h1>
        <button data-test="increment-button" onClick={this.onIncrement}>
          Increment counter
        </button>
        <button data-test="decrement-button" onClick={this.onDecrement}>
          Decrement counter
        </button>
      </div>
    );
  }
}

export default App;
