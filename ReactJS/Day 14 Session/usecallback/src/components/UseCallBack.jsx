import React, { useRef, useState, useCallback } from "react";

export default function UseCallBack() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Prop function ran!");
  }, []);

  return (
    <>
      <h1>Use CallBack</h1>
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        Trigger Render
      </button>
      <Child onClick={handleClick} />
    </>
  );
}

const Child = React.memo(({ onClick }) => {
  const firstRenderRef = useRef(true);

  if (firstRenderRef.current) {
    console.log("Child Initial Render");
  } else {
    console.log("Child Re-Render");
  }

  firstRenderRef.current = false;

  return (
    <>
      <h1>Child Student</h1>
      <button onClick={onClick}>Click</button>
    </>
  );
});
