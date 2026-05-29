import { useState } from "react";
import "./App.css";
import UserList from "./components/UserList";
import { useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  const APP_URL = "http://localhost:5000/api/users";

  async function fetchUsers() {
    try {
      const response = await fetch(APP_URL);

      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const users = await response.json();

      setUsers(users);
    } catch (error) {
      console.log("error: ", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (error) {
    return <div className="error">Error occurred: ${error}</div>;
  }

  return (
    <>
      <UserList users={users} />
    </>
  );
}

export default App;
