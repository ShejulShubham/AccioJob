import { useState } from "react";

export default function ColorChanger() {
  let [color, setColor] = useState("lightgrey");

  return (
    <>
      <h2>Assignment 5</h2>
      <div
        style={{
          width: "150px",
          height: "150px",
          background: color,
          marginBottom: "20px",
        }}
      ></div>
      <button onClick={() => setColor("crimson")}>Red</button>
      <button onClick={() => setColor("lightgreen")}>Green</button>
      <button onClick={() => setColor("lightblue")}>Blue</button>
      <button onClick={() => setColor("lightgrey")}>Default</button>
    </>
  );
}
