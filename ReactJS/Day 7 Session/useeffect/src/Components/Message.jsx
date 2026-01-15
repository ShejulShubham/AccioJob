import { useEffect, useState } from "react";

export default function Message() {
  const [load, setLoad] = useState(0);

  useEffect(() => {
    console.log("App loaded!");
  }, []);

  return (
    <>
      <h1>Assignment 2</h1>
      <button onClick={() => setLoad((prev) => prev + 1)}>
        <strong>Load</strong>
      </button>
    </>
  );
}
