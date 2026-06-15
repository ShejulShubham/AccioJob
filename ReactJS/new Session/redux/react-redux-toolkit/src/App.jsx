import { useState } from "react";
import './App.css'
import Counter from './components/Counter/Counter'
import TodoForm from './components/Todo/TodoForm'
import TodoList from './components/Todo/TodoList'


function App() {

  const [updateTodo, setUpdateTodo] = useState(null);

  function handleUpdateTodo(todo) {
    setUpdateTodo(todo);
  }

  return (
    <>
      <h1>React Redux day 3</h1>
      <Counter />
      <br />
      <br />
      {updateTodo ? <TodoForm updateTodo={updateTodo} /> : <TodoForm />}
      <TodoList handleUpdate={handleUpdateTodo} />
    </>
  )
}

export default App
