import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul style={{ display: "flex", gap: "10px"}}>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "white",
          })}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "white"
          })}
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "white"
          })}
          to={"/contact"}
        >
          Contact
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "white"
          })}
          to={"/movies"}
        >
          Movies
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "white"
          })}
          to={"/nested"}
        >
          Nested Route
        </NavLink>
        <NavLink
          style={({ isActive }) => ({
            color: isActive ? "red" : "white"
          })}
          to={"/dashboard"}
        >
          Dashboard
        </NavLink>
      </ul>
    </nav>
  );
}
