import { useState, useEffect } from "react";

export default function MultipleDependencies() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");
//   let firstTime = 0;
  const [firstTime, setFirstTime] = useState(0);

  useEffect(() => {

    if (!firstTime) {
        setFirstTime(1);
      return;
    }


    console.log("something changed");
  }, [count, text]);

  return (
    <>
    <h1>Assignment 6</h1>
      <input
        type="text"
        placeholder="Type something...."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Count: {count}</p>
      <button
        onClick={() => {
          setCount((prev) => prev + 1);
        }}
      >
        +1
      </button>
    </>
  );
}
