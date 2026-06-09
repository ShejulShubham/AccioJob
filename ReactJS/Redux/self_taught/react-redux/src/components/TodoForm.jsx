import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoStore";

export default function TodoForm() {
  const [input, setInput] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(addTodo(input));
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h3>Todo Form</h3>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="enter text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <br />
          <button type="submit" style={{ padding: "5px 10px" }}>
            add todo
          </button>
        </form>
      </div>
    </>
  );
}
