import { createContext, useReducer, useContext } from "react";
import Counter from "./Counter";

const initialState = {
  counter: 0,
};

const CounterContext = createContext(initialState);

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, counter: state.counter + 1 };
    case "decrement":
      return { ...state, counter: state.counter - 1 };
    default:
      return state;
  }
}

export default function ContextReducerStateProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

export function useCounter() {
  return useContext(CounterContext);
}
