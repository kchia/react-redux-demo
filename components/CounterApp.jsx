import { connect } from 'react-redux';
import { Counter } from './Counter';
import { 
  increment,
  decrement,
  clear,
  incrementBy
} from '../actions/actionCreators.js';

// Map Redux state to component props
// takes the whole state of redux and only pass to the component
// what it needs, injecting it as a prop
const mapStateToProps = state => ({ value: state });

// Map Redux actions to component props
const mapDispatchToProps = dispatch => ({
  handleIncrement() {
    dispatch(increment());
  },

  handleDecrement() {
    dispatch(decrement());
  },

  handleClear() {
    dispatch(clear());
  },

  handleIncrementBy(size) {
    dispatch(incrementBy(size));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)

