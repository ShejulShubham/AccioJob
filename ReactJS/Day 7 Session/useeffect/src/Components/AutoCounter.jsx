import { useState, useEffect } from "react";

export default function AutoCounter() {
  const [count, setCount] = useState(0);
  const [state, setState] = useState(false);

  useEffect(() => {
    if (!state) return;

    const timer = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [state]);

  return (
    <>
      <h1>Assignment 13</h1>
      <p>Count: {count}</p>
      <button onClick={() => setState(true)}>Start</button>
      <button onClick={() => setState(false)}>Stop</button>
      <p>{state ? "Started..." : "Stopped"}</p>
    </>
  );
}
