import React, { useState, Suspense } from "react";
import { Link, Routes, Route, NavLink } from "react-router-dom";
import SlowComponent from "./components/SlowComponent";
import ParentWithoutCallback from "./components/ParentWithoutCallback";
// import ChartPage from "./components/ChartPage";
const ChartPage = React.lazy(() => import("./components/ChartPage"));
import "./App.css";
const HomePage = React.lazy(() => import("./components/HomePage"));
const AboutPage = React.lazy(() => import("./components/AboutPage"));
const ContactUsPage = React.lazy(() => import("./components/ContactUsPage"));

function App() {
  const [showChart, setShowChart] = useState(false);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Optimization day 1</h1>
      <div style={{ background: "lightgrey" }}>
        <Suspense
          fallback={
            <div>
              <h3>Loading page...</h3>
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/about" element={<AboutPage />}></Route>
            <Route path="/contact" element={<ContactUsPage />}></Route>
          </Routes>
        </Suspense>
      </div>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "20px",
          justifyContent: "center",
        }}
      >
        {/* <Link to="/">Home</Link>
        <Link to="./about">About</Link>
        <Link to="./contact">Contact us</Link> */}
        <NavLink
          style={({ isActive }) => ({
            background: isActive ? "lightblue" : "transparent",
          })}
          to={"/"}
        >
          HOME
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            background: isActive ? "lightblue" : "transparent",
          })}
          to={"/about"}
        >
          ABOUT
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            background: isActive ? "lightblue" : "transparent",
          })}
          to={"/contact"}
        >
          CONTACT US
        </NavLink>
      </nav>

      <>
        <SlowComponent />
        <br />
        <br />
        <ParentWithoutCallback />
        <br />
        <br />
        <button onClick={() => setShowChart((s) => !s)}>
          {showChart ? "hide" : "show"}
        </button>
        {showChart ? (
          <Suspense fallback={<div>Loading chart...</div>}>
            <ChartPage />
          </Suspense>
        ) : (
          <div>
            <h3>Chart is hidden.</h3>
          </div>
        )}
      </>
    </div>
  );
}

export default App;
