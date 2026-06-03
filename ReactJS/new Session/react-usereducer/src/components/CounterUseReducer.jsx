import { useReducer, useState } from "react";

export default function CounterUseReducer() {
  const initialState = {
    count: 0,
    step: 1,
  };

  function reducer(state, action) {
    switch (action.type) {
      case "increment":
        return { ...state, count: state.count + 1 };
      case "decrement":
        return { ...state, count: state.count - 1 };
      case "incrementStep":
        return { ...state, step: state.step + 1 };
      case "incrementCounterStep":
        return { ...state, count: state.count + state.step };
      case "increaseByInput":
        return { ...state, count: state.count + action.payload };
      case "reset":
        return initialState;
      default:
        return state;
    }
  }

  console.log("COUNTER RENDERED");

  const [state, dispatch] = useReducer(reducer, initialState);
  const [step, setStep] = useState(1);

  return (
    <>
      <h2>Counter</h2>
      <p>count: {state.count}</p>
      <p>steps: {state.step}</p>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          dispatch({ type: "incrementStep" });
        }}
      >
        increment step
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        reset
      </button>
      <button
        onClick={() => {
          dispatch({ type: "incrementCounterStep" });
        }}
      >
        increment counter by step
      </button>

      <input
        type="number"
        onChange={(e) => {
          setStep(Number(e.target.value));
        }}
      />
      <button
        onClick={() => dispatch({ type: "increaseByInput", payload: step })}
      >
        Increase by Input
      </button>
    </>
  );
}
