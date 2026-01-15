import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Movies from "./pages/Movies";
import MovieDetails from "./components/MovieDetail";
import NestedRoute from "./pages/NestedRoute";
import Team from "./components/Team";
import Company from "./components/Company";
import Dashboard from "./pages/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";
import Billing from "./components/Billing";

function App() {
  const movies = [
    { id: "tt101", title: "Inception", year: 2010 },
    { id: "tt102", title: "Avatar", year: 2009 },
    { id: "tt103", title: "Interstellar", year: 2014 },
  ];

  return (
    <>
      <div className="app-shell">
        <div className="assignment-card">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/movies/" element={<Movies movies={movies} />} />
            <Route path="/movie/:id" element={<MovieDetails list={movies} />} />

            <Route path="/nested" element={<NestedRoute />}>
              <Route path="team" element={<Team />} />
              <Route path="company" element={<Company />} />
            </Route>


            <Route path="/dashboard" element={<Dashboard />} >
              <Route path="profile" element={<Profile />} />
              <Route path="settings" element={<Settings />} />
              <Route path="billing" element={<Billing />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
``;
