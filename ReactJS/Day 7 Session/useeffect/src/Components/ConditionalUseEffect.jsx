import { useEffect, useState } from "react";

export default function ConditionalUseEffect() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count !== 0 && count % 2 == 0) {
        console.log("count is even!");
    }
  }, [count]);

  return (
    <>
      <h1>Assignment 5</h1>
      <p>Count: {count}</p>
      <button onClick={() => {setCount(prev=>prev+1)}}>Re-render</button>
    </>
  );
}
