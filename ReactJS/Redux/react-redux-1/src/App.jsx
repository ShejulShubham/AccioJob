import { useState } from "react";
import "./App.css";
import CounterButtons from "./components/CounterButtons";
import CounterDisplay from "./components/CounterDisplay";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-grey">
      <h1>React Redux day 1</h1>
      <CounterDisplay />
      <CounterButtons />
      <hr />
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
