import { useState } from "react";
import { UserContext } from "./context/userContext";
import "./App.css";
import A from "./components/A";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [user, setUser] = useState("shubham");
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((prev) => (prev == "light" ? "dark" : "light"));
  }

  return (
    <UserContext.Provider value={user}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <h1>REACT: Context API</h1>
        <input type="text" onChange={(e) => setUser(e.target.value)} />
        <A />
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
