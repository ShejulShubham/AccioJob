import { useState } from "react";

export default function DoubleTripleNumber() {
  let [number, setNumber] = useState(1);

  return (
    <>
      <h1>Assignment 2</h1>
      <h2>Number: {number}</h2>
      <button
        onClick={() => {
          setNumber((prev) => prev * 2);
        }}
      >
        Double
      </button>
      <button
        onClick={() => {
          setNumber((prev) => prev * 3);
        }}
      >
        Triple
      </button>
    </>
  );
}
