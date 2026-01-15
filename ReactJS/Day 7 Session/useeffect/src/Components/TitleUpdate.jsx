import { useEffect, useState } from "react";

export default function TitleUpdate() {
  const [count, setCount] = useState(0);

  function updateTitle() {
    if(!count) return;
    document.title = `Count is ${count}`;
  }

  useEffect(() => {
    updateTitle();
  }, [count]);

  return (
    <>
      <h1>Assignment 3</h1>
      <p>Count : {count}</p>
      <button onClick={()=>{setCount(prev=>prev+1); updateTitle}}>+1</button>
    </>
  );
}
