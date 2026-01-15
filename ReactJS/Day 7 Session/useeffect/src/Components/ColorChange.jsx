import { useState, useEffect } from "react";

export default function ColorChange() {
  const [color, setColor] = useState("lightgrey");

  useEffect(() => {
    if (color === "lightgrey") return;

    console.log("background Changed!");
  }, [color]);

  return (
    <div style={{ padding: "20px", background: color }}>
      <h1 style={{ color: color === "lightgrey" ? "black" : "white" }}>
        Assignment 8
      </h1>
      <button
        onClick={() =>
          setColor((prev) => {
            if (prev == "red") {
              return "blue";
            }

            return "red";
          })
        }
      >
        Change color
      </button>
    </div>
  );
}
