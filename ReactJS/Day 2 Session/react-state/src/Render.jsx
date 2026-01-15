import { useState } from "react";

export default function Render() {
  let [items, setItems] = useState([]);
  let [tasks, setTasks] = useState(["task 1", "task 2"]);
  let [form, setForm] = useState({ name: "", age: "" });
  let [randomNumber, setRandomNumber] = useState(0);

  return (
    <>
      <button
        onClick={() => {
          setItems([...items, `item ${items.length + 1}`]);
        }}
      >
        Add Item
      </button>
      <p>{items}</p>

      <br />
      <br />

      <button
        onClick={() => {
          setTasks(
            tasks.filter((task) => {
              if (task !== "task 1") {
                return task;
              }
            })
          );
        }}
      >
        Remove Task 1
      </button>
      <p>{tasks}</p>

      <input
        type="text"
        value={form.name}
        placeholder="name"
        onChange={(e) => {
          setForm({ ...form, name: e.target.value });
        }}
      />

      <input
        type="text"
        value={form.age}
        placeholder="age"
        onChange={(e) => {
          setForm({ ...form, age: e.target.value });
        }}
      />

      <p>
        {form.name}-{form.age}
      </p>

      <br />
      <br />
      <h2>
        Random Number: {randomNumber ? randomNumber : "click on generate"}
      </h2>

      <button
        onClick={() => {
          setRandomNumber(Math.floor(Math.random() * 100));
        }}
      >
        Generate Random Number
      </button>
    </>
  );
}
