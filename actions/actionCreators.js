import { 
  INCREMENT,
  DECREMENT,
  CLEAR,
  INCREMENT_BY
} from './index.js';

export function increment () {
  console.log('Incrementing value by 1');
  return {
    type: INCREMENT
  }
};

export function decrement () {
  console.log('Decrementing value by 1');
  return {
    type: DECREMENT
  }
};

export function clear () {
  console.log('Resetting counter to 0');
  return {
    type: CLEAR
  }
};

export function incrementBy (incrementByNum) {
  console.log(`Incrementing value by ${incrementByNum}`);
  return {
    type: INCREMENT_BY,
    payload: incrementByNum
  }
};