import { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = "http://localhost:5000/api/todos";

  useEffect(()=>{
    fetchTodos();
  }, [])

  const fetchTodos = async () => {
    setTimeout(async () => {
      try {
        const response = await axios.get(API_URL);
        if (response.statusText !== "OK") {
          throw new Error("Failed to fetch todos");
        }

        const data = await response.data;
        setTodos(data);
      } catch (err) {
        setError(err.message);
      }finally{
        setLoading(false);
      }
    }, 1000);
  };

  async function toggleCompleted(id, completed) {
    try {
      setLoading(true);
      const response = await axios.patch(`${API_URL}/${id}`, {completed: !completed});
      
      fetchTodos();
    }catch(error){
      console.log("ERROR: ", error);
    }
  }

  async function createTodo(title) {
    if (!title.trim()) {
      alert("title cannot be empty!");
      return;
    }

    try {
      const response = await axios.post(API_URL, { title });
    } catch (error) {
      console.log(error);
    } finally {
      setCount((prev) => prev + 1);
    }
  }

  async function deleteTodo(id) {
    try {
    } catch (error) {
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <div className="loading">Loading your tasks...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <>
      <TodoForm createTodo={createTodo} />
      <TodoList
        todos={todos}
        toggleCompleted={toggleCompleted}
        deleteTodo={deleteTodo}
      />
    </>
  );
}

export default App;
