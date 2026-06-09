import { useMemo, useState } from "react";

function heavyCalculation(num) {
  console.log("heavy calculation begin");
  let result = 0;

  for (let i = 0; i < 1e9; i++) {
    result += 1 % 10;
  }

  return result + num;
}
export default function SlowComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //   const value = heavyCalculation(count);
  const value = useMemo(() => heavyCalculation(count), [count]);

  return (
    <div>
      <h2>Slow Component</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Re-Calculate</button>
      <p>Computed Value: {value}</p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}
