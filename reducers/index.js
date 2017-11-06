// reducers/index.js
import { 
  INCREMENT, 
  DECREMENT, 
  CLEAR, 
  INCREMENT_BY 
} from '../actions/index.js';

const DEFAULT_STATE = {
  num: 0
};

const increment = (state, action) => Object.assign({}, state, { num: state.num + 1 });

const decrement = (state, action) => Object.assign({}, state, { num: state.num - 1 });

const incrementBy = (state, action) => Object.assign({}, state, { num: state.num + action.payload });

// the dispatch function
// needs to take care of default state
// needs to handle action if it does not know what action is with default:

// actions have types and payloads
// flux standard action
// {
//   type: string,
//   payload: ,
//   error: ,
//   metadata: 
// }
const rootReducer = (state = DEFAULT_STATE, action) => {

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
      return increment(state, action);

    case DECREMENT:
      // state.num  = state.num - 1;
      // return state;
      return decrement(state, action);

    case CLEAR:
      return DEFAULT_STATE;

    case INCREMENT_BY:
      // state.num = state.num + action.incrementByNum;
      // return state;
      return incrementBy(state, action);

    // The most basic reducer just returns the original state:
    default:
      return state;
  }
};

export default rootReducer;