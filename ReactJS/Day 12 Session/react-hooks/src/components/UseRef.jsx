import { useState, useRef } from "react";

// render -> commit -> effect -> return (next effect)

export default function UseRef() {
  const countRef = useRef(0);
  const [countState, setCountState] = useState(0);

  console.log("component rendered");
  console.log("Count State on render: ", countState);

  function handleClickRef() {
    countRef.current++;
    console.log(countRef);
    console.log("Count Ref: ", countRef.current);
  }

  function handleClickState() {
    setCountState((prev) => prev + 1);
    console.log("Count State inside handler: ", countState);
  }

  return (
    <>
      <h1>useRef Hook</h1>
      <button onClick={handleClickRef}>Increment Ref</button>
      <button onClick={handleClickState}>Increment State</button>
    </>
  );
}
