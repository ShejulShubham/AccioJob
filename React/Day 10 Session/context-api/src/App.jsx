import ThemeProvider from "./context/ThemeProvider";
import AuthProvider from "./context/AuthProvider";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        <ThemeProvider>
          <Home />
        </ThemeProvider>

        <AuthProvider>
          <Navbar />
          <Login />
          <Dashboard />
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
