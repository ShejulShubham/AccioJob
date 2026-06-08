import { useCounter } from "./ContextReducerStateProvider";

export default function Counter() {
  const { state, dispatch } = useCounter();

  return (
    <>
      <h2>Counter Context with useReducer hook</h2>
      <h3>Counter: {state.counter}</h3>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Reset
      </button>
    </>
  );
}
