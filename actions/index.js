/**

  ACTION CREATORS
  - Action creators are functions that return an action object.
   They are helper functions used when dispatching an action, for example:

    const ADD_TODO = 'ADD_TODO';
    function addTodo(text) {
      return {
        type: ADD_TODO,
        text
      }
    }

    store.dispatch(addTodo('Build my first Redux app'))

  - An action is the payload of data sent to a reducer to let
  it create a new state. It is an object that always contains a type property. 
  The type string is often turned into a variable so it can be imported and used
  in other reducers and components.

**/
export const INCREMENT = 'counter/INCREMENT';
export const DECREMENT = 'counter/DECREMENT';
export const CLEAR = 'counter/CLEAR';
export const INCREMENTBY = 'counter/INCREMENTBY';

export const incrementBy = (incrementByNum) => {
  console.log(`Incrementing value by ${incrementByNum}`);
  return {
    type: INCREMENTBY,
    incrementByNum
  }
};
