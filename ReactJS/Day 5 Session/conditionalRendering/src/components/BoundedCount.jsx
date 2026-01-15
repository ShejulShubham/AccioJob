import { useState } from "react";

export default function BoundedCount() {
  let [count, setCount] = useState(0);

  function handleIncrease() {
    setCount((prev) => {
      if (prev > 9) {
        return prev;
      }

      return prev + 1;
    });
  }

  function handleDecrease() {
    setCount((prev) => {
      if (prev <= 0) {
        return prev;
      }

      return prev - 1;
    });
  }

  const increaseDisabled = count === 10;
  const decreaseDisabled = count === 0;

  return (
    <>
      <h3>Counter: {count}</h3>
      <button disabled={increaseDisabled} onClick={handleIncrease}>+1</button>
      <button disabled={decreaseDisabled} onClick={handleDecrease}>-1</button>
      <button onClick={()=>setCount(0)}>reset</button>

    </>
  );
}
