import { useMemo, useState } from "react";

function slowCalculation(num) {
  for (let i = 0; i < 1_000_000_000; i++) {
    num = +i;
  }

  console.log("Slow Calculation running...");
  return num;
}

export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);

//   const total = slowCalculation(count);

    const total = useMemo(()=>{
        return slowCalculation(count);
    }, [count]);

  const themeStyle = {
    background: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#000",
  };

  return (
    <div style={themeStyle}>
      <h1>Expense Calculation</h1>
      <h3>Count: {count}</h3>
      <h3>Theme: {dark ? "dark" : "light"}</h3>
      <button onClick={() => setCount((prev) => prev + 1)}>
        Increment Count
      </button>
      <button onClick={() => setDark((prev) => !prev)}>Toggle Theme</button>
      <h3>Calculated Value: {total}</h3>
    </div>
  );
}
