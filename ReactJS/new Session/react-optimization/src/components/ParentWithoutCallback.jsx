import React, { useCallback, useState } from "react";

const Child = React.memo(function Child({ onClick, label }) {
  console.log("child rendered", label);
  return <button onClick={onClick}>{label}</button>;
});

export default function ParentWithoutCallback() {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount((p) => p + 1);
  }, []);

  const handleOther = useCallback(() => {
    setOther((p) => p + 1);
  }, []);

  return (
    <div>
      <h2>Parent without callback</h2>
      <p>Count: {count}</p>
      <p>Other: {other}</p>
      <Child onClick={handleIncrement} label="Increment Count" />
      <Child onClick={handleOther} label="Increment Other" />
      <button onClick={() => setCount((p) => p + 1)}>Parent Increment</button>
    </div>
  );
}