import CourseArea from "./CourseArea";
import AdminArea from "./AdminArea";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Dashboard() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const color = theme == "light" ? "white" : "black";

  return (
    <>
      <h2>Dashboard</h2>
      <div style={{ display: "flex", gap: "2rem", backgroundColor: color }}>
        <div>
          <CourseArea />
        </div>
        <AdminArea />
      </div>
      <div>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </>
  );
}
