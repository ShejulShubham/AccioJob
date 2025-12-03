import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Components/Navbar";
import Product from "./pages/Product";
import User from "./pages/User";
import Post from "./pages/Post";
import NotFound from "./pages/NotFound";

function App() {
  const users = [
    { id: 1, name: "Shubham Shejul", age: 90, place: "Pune" },
    { id: 2, name: "Ranveer Kapoor", age: 67, place: "Mumbai" },
    { id: 3, name: "Riya Kapoor", age: 9, place: "Delhi" },
  ];

  return (
    <>
      <div className="app-shell">
        <div className="assignment-card">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home users={users} />} />
            <Route path="/user/:id" element={<User users={users} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/post/:postId" element={<Post />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
``;
