import { useState } from "react";
import Counter from "./Counter";
import Render from "./Render";
import StepCounter from "./StepCounter";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Counter /> */}
      <Render />
      <StepCounter />
    </>
  );
}

export default App;
