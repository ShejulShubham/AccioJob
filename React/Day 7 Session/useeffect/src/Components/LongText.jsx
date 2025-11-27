import { useState, useEffect } from "react";

export default function LongText() {
  const [text, setText] = useState("");

  useEffect(() => {
    if (text.trim().length >= 5) {
      console.log("Long Text");
    }
  }, [text]);

  return (
    <>
      <h1>Assignment 9</h1>
      <input
        type="text"
        placeholder="type...."
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
    </>
  );
}
