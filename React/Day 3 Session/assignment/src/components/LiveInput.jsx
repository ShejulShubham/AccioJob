import { useState } from "react";

export default function LiveInput() {
  let [input, setInput] = useState("");

  return (
    <>
      <h2>Assignment 4</h2>
      <input
        type="text"
        value={input}
        placeholder="Start Typing..."
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />

      <h3>You are typing: {input}</h3>
    </>
  );
}
