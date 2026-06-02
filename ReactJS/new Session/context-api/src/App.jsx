import { useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import { UserContext } from "./context/UserContext";
import { ThemeContext } from "./context/ThemeContext";
import PostsProvider from "./Provider/PostsProvider";

function App() {
  const currentUser = {
    name: "shubham",
    role: "student",
  };

  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  }

  return (
    <PostsProvider>
      <UserContext.Provider value={currentUser}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <Dashboard />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </PostsProvider>
  );
}

export default App;
