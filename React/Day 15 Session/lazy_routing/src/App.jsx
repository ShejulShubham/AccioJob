import "./App.css";
import React, { Suspense } from "react";
import { Routes, Route, Link } from "react-router-dom";
const Home = React.lazy(() => import("./pages/Home"));
const Contact = React.lazy(() => import("./pages/Contact"));
const About = React.lazy(() => import("./pages/About"));

function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        <h1>Assignments</h1>
        <nav style={{ display: "flex", gap: "20px" }}>
          <Link to={"/"}>Home</Link>
          <Link to={"/contact"}>Contact</Link>
          <Link to={"/about"}>About</Link>
        </nav>

        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
