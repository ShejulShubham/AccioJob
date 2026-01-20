import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      {toggle && <Child />}
      <button
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        Toggle Child
      </button>
    </>
  );
}
