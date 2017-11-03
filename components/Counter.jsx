// Create components/Counter.jsx
import React from 'react';
import { incrementBy } from '../actions'
import { store } from '../index';

const Counter = ({ value, onIncrement, onDecrement, onClear }) => {

  // userInput must be declared here so the ref callback can refer to it
  let userInput = null;

  return (
    <div>
      <h1> Value: {value.num} </h1>
      <button onClick={onIncrement}> + </button>
      <button onClick={onDecrement}> - </button>
      <button onClick={onClear}> Clear </button><br />
      <input
        type='number'
        ref={(input) => userInput = input}
      />
      <button
        onClick={() => store.dispatch(incrementBy(Number(userInput.value)))}
      >
        Increment By
      </button>
    </div>
  )
};

export default Counter;
