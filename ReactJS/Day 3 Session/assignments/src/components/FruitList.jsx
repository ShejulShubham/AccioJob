import { useState } from "react";

export default function FruitList() {
  let [fruitList, setFruitList] = useState([]);
  let [input, setInput] = useState("");

  function addFruit() {
    setFruitList((prev)=>[...prev, input.trim()]);
    setInput("");
    // console.log("working!");
  }

  function removeLastFruit() {
    // Simple Method
    // const list = fruitList;
    // list.pop();
    // setFruitList(list)

    //Slice Method
    setFruitList((prev) => prev.slice(0, -1));
  }

  return (
    <>
      <h2>Assignment 7</h2>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="enter fruit name"
      />
      <button onClick={addFruit}>Add Fruit</button>
      <button onClick={removeLastFruit} disabled={fruitList.length === 0}>Remove Last Fruit</button>
      <ul>
        {fruitList.map((fruit) => {
          return <li>{fruit}</li>;
        })}
      </ul>
    </>
  );
}
