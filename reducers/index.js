// reducers/index.js
import { INCREMENT, DECREMENT, CLEAR, INCREMENTBY } from '../actions';

const initialState = {
  num: 0
};

export default (state = initialState, action) => {

  // Reducers are functions that act on an action's type.
  // They could be written as a set of if-else statements, 
  // but by convention they use a switch statement for readability.
  switch (action.type) {

    case INCREMENT:

      // This is no good, it isn't a pure function! Can you explain why?
      // By modifying the internals of the state rather than returning a new state, 
      // this reducer produces side effects and is not predictable.
        // state.num = state.num + 1;
        // return state;


      // Object.assign() - creates a fresh copy of an object, 
      // bringing over all properties from the original object without referencing it
      return Object.assign({}, state, {
        num: state.num + 1
      });

    case DECREMENT:
      // state.num  = state.num - 1;
      // return state;
      return Object.assign({}, state, {
        num: state.num - 1
      });

    case CLEAR:
      return initialState;

    case INCREMENTBY:
      // state.num = state.num + action.incrementByNum;
      // return state;
      return Object.assign({}, state, {
        num: state.num + action.incrementByNum
      });

    // The most basic reducer just returns the original state:
    default:
      return state;
  }
};
