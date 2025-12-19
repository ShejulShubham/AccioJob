import { useState, useRef, useEffect } from "react";

export default function RenderTracker() {
  const [count, setCount] = useState(0);
  const [time, setTime] = useState(new Date().toLocaleTimeString());
  const countRef = useRef(0);
  const timestampRef = useRef(null);

  useEffect(() => {
    countRef.current++;
    console.log("Render Count: ", countRef.current);
    timestampRef.current = new Date().toLocaleTimeString();
  }, [count]);

  function handleClick() {
    setCount((prev) => prev + 1);
    console.log("Last Updated Count: ", timestampRef.current);
  }

  setInterval(() => {
    setTime(new Date().toLocaleTimeString());
  }, 1000);

  return (
    <>
      <h1>Render Tracker</h1>
      <h2>Total Clicks: {count}</h2>
      <h2>Current Time: <span style={{color: "lightblue"}}>{time}</span></h2>
      <button onClick={handleClick}>Increment</button>
    </>
  );
}
