import { useState } from "react";

export default function FunctionalUpdate() {
  let [counter, setCounter] = useState(1);

  return (
    <>
      <h2>Assignment 6</h2>
      <h3>Counter: {counter}</h3>
      <strong>Functional Update</strong>
      <br />
      <button
        onClick={() => {
            setCounter((prev) => prev + 1);
            setCounter((prev) => prev + 1);
        }}
      >
        Increase by 2
      </button>
      <button
        onClick={() => {
            setCounter((prev) => prev - 1);
            setCounter((prev) => prev - 1);
        }}
      >
        Decrease by 2
      </button>
      <br />
      <strong>Simple Update</strong>
        <br />
      <button
        onClick={() => {
          setCounter(counter + 1);
          setCounter(counter + 1);
        }}
      >
        Increase by 2
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
          setCounter(counter - 1);
        }}
      >
        Decrease by 2
      </button>
    </>
  );
}
