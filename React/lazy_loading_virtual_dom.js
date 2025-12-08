import { useState } from "react";

export default function Home() {
  
  // Lazy Initialization - pass a function so it will only be called at first time meaning while rending and not on re-render
  
    const [value, setValue] = useState(() => {
    console.log("Heavy calculation...");
    return expensiveFunction();
  });

  return (
    <>
      <h1>Hello There!</h1>
    </>
  );
}

// virtual dom - copy of real dom - lightweight
// real dom

// component cycle
// render
// virtual dom - object {key: value}
// state/prop change
// re-rendering
// virtual dom

// prev virtual dom vs new virtual dom
// react - compare (diffing algo)
// real dom update
// reconciliation

// changes - reflect - repaint
