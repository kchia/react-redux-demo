// reducers/index.js
import { INCREMENT, DECREMENT, CLEAR, INCREMENTBY } from '../actions';

const initialState = 0;
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case CLEAR:
      return initialState;
    case INCREMENTBY:
      return state + action.incrementByNum;
    default:
      return state;
  }
};
