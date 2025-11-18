import { useState } from "react";

export default function StepCounter() {
  let [count, setCount] = useState(0);
  let [step, setStep] = useState(0);
  return (
    <>
    <br />
    <br />
    <h1>Assignment 1: Step Counter</h1>
      <input
        type="number"
        placeholder="enter step value"
        value={step}
        onChange={(e) => {
          setStep(Number(e.target.value));
        }}
      />
      <button onClick={()=>{setCount(count+step)}}>Increase counter</button>

      <h2>
        Counter: <strong>{count}</strong>
      </h2>
    </>
  );
}