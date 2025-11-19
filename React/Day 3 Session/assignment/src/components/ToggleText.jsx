import { useState } from "react";

export default function ToggleText() {
  let [text, setText] = useState("Hello Students!");

  function changeText() {
    setText((prev) => {
      return prev == "Hello Students!" ? "Welcome To React" : "Hello Students!";
    });
  }

  return (
    <>
      <h1>Assignment 3</h1>
      <h2>{text}</h2>
      <button onClick={changeText}>Change Text</button>
    </>
  );
}
