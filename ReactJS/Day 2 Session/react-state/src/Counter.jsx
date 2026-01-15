import { useState } from "react";

export default function Counter() {
  let [count, setCount] = useState(0);
  let [name, setName] = useState("Shubham Shejul");
  let [show, setShow] = useState(false);
  let [text, setText] = useState("");

  return (
    <>
      <h1>Dashboard counter</h1>
      <p>
        Count : <strong>{count}</strong>
      </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrease
      </button>

        <br/>


        <p>Name: {name}</p>
      <button onClick={()=>{setName("Sakharam Binder")}} >change name</button>

        <br/>
        <br/>

        <input type={show ? "text" : "password"} />
        <button onClick={()=>{setShow(!show)}} >{show ? "HIDE" : "SHOW"}</button>

        <br/>
        <br/>

        <input type="text" value={text} onChange={(e)=>{setText(e.target.value)}} />

        <p>You typed : <strong>{text}</strong></p>
    </>
  );
}
