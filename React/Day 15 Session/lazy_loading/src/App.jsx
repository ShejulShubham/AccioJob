import React, { useState, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
const Dashboard = React.lazy(() => import("./components/Dashboard"));
const Profile = React.lazy(() => import("./components/Profile"));

const Home = React.lazy(() => import("./pages/Home"));
const Dashboard2 = React.lazy(() => import("./pages/Dashboard2"));
const Login = React.lazy(() => import("./pages/Login"));
const Settings = React.lazy(() => import("./pages/Settings"));

function App() {
  const [page, setPage] = useState("dashboard");

  const path = window.location.pathname;

  const navigate = useNavigate();

  function handleRoute(route) {
    navigate(route);
  }

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <h1>Welcome to the Website</h1>

        {/* <button onClick={() => setPage("dashboard")}>
          Go to {page === "dashboard" ? "" : ""}Dashboard
        </button>
        <button onClick={() => setPage("profile")}>Go to Profile</button>

        <Suspense fallback={<h2>Loading....</h2>}>
          {page === "dashboard" && <Dashboard />}
          {page === "profile" && <Profile />}
        </Suspense> */}
        

        {path !== "/home" && path !== "/" && (
          <button onClick={() => handleRoute("/home")}>Home Page</button>
        )}
        {path !== "/login" && (
          <button onClick={() => handleRoute("/login")}>Login Page</button>
        )}
        {path !== "/dashboard" && (
          <button onClick={() => handleRoute("/dashboard")}>
            Dashboard Page
          </button>
        )}
        {path !== "/settings" && (
          <button onClick={() => handleRoute("/settings")}>
            Settings Page
          </button>
        )}

        <Suspense fallback={<h2>Loading page...</h2>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard2 />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
