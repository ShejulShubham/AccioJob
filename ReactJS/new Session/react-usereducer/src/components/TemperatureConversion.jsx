import { useReducer, useState } from "react";

const initialState = {
  celsius: 0,
  fahrenheit: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "convert":
      return {
        ...state,
        celsius: action.payload,
        fahrenheit: (action.payload * 9) / 5 + 32,
      };
    default: return state;
  }
}

export default function TemperatureConversion() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [input, setInput] = useState();

  console.log("RENDERED TEMP");

  return (
    <div>
      <input
        type="number"
        placeholder="enter temp in Celsius"
        value={input}
        onChange={(e) => dispatch({ type: "convert", payload: Number(e.target.value) })}
      />
      <h3>Celsius: {state.celsius}</h3>
      <h3>Fahrenheit: {state.fahrenheit}</h3>
    </div>
  );
}
