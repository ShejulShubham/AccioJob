import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{display: "flex", gap: "10px"}}>
      <Link to={"/"}>Home</Link>
      <Link to={"/about"}>About</Link>
      <Link to={"/contact"}>Contact Us</Link>

      <br />

      <NavLink
        to={"/"}
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Home
      </NavLink>
      <NavLink
        to={"/about"}
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >
        About
      </NavLink>
      <NavLink
        to={"/contact"}
        style={({ isActive }) => ({
          color: isActive ? "red" : "white",
        })}
      >
        Contact Us
      </NavLink>
    </nav>
  );
}
