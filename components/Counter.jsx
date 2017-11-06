// Create components/Counter.jsx
import React from 'react';
import { store } from '../index';

export const Counter = (props) => {

  // userInput must be declared here so the ref callback can refer to it
  let userInput = null;

  return (
    <div>
      <h1> Value: {props.value.num} </h1>
      <button onClick={props.handleIncrement}> + </button>
      <button onClick={props.handleDecrement}> - </button>
      <button onClick={props.handleClear}> Clear </button><br />
      <input
        type='number'
        ref={(input) => userInput = input}
      />
      <button
        onClick={() => props.handleIncrementBy(Number(userInput.value))}
      >
        Increment By
      </button>
    </div>
  )
};
