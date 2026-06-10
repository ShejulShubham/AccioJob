import { createStore } from "redux";

// function createStore(reducer, initialState) {
//   let state = initialState;

//   function getState() {
//     return state;
//   }

//   function dispatch(action) {
//     state = reducer(state, action);
//   }

//   return { getState, dispatch };
// }

// Action Types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const INCBY = "INCREMENTBY";
const DECBY = "DECREMENTBY";

// Action Creators
function increment() {
  return { type: INCREMENT };
}

function decrement() {
  return { type: DECREMENT };
}

function incrementBy(payload = 1) {
  return { type: INCBY, payload };
}

function decrementBy(payload = 1){
    return { type: DECBY, payload}
}

function countReducer(state, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case INCBY:
      return state + action.payload;
    case DECBY:
        return state - action.payload;
      default:
      return state;
  }
}

const store = createStore(countReducer, 0);
const { getState, dispatch } = store;
console.log("Initial state: ", getState());
dispatch(increment());
dispatch(increment());
console.log(getState());
dispatch(decrement());
console.log(getState());
dispatch(incrementBy(5));
console.log(getState());
dispatch(incrementBy());
console.log(getState());
dispatch(decrementBy(5));
console.log(getState());
dispatch(decrementBy());
console.log(getState());