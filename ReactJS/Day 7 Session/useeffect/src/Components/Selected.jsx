import { useState, useEffect } from "react";

export default function Selected() {
  const [select, setSelected] = useState("default");

  const options = ["make", "believe", "what", "required"];

  useEffect(() => {
    if (select === "default") return;

    console.log("selected: ", select);
  }, [select]);

  return (
    <>
      <h1>Assignment 10</h1>
      <select onChange={(e) => setSelected(e.target.value)}>
        <option>Default</option>
        {options.map((op, index) => {
          return (
            <option key={index} value={op}>
              {op}
            </option>
          );
        })}
      </select>
    </>
  );
}
