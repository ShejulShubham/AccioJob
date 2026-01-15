import { useEffect, useState } from "react";

export default function TwoUseEffects() {
  const [re, setRe] = useState(0);

  useEffect(() => {
    console.log("Mounted!");
  }, []);

  useEffect(() => {
    if (!re) return;
    console.log("Rerender happened");
  }, [re]);

  return (
    <>
      <h1>Assignment 4</h1>
      <button onClick={() => setRe((prev) => prev + 1)}>Re-render</button>
    </>
  );
}
