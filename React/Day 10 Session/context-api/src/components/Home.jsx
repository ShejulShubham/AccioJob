import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function Home() {
  let { theme, toggle } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          background: theme === "light" ? "white" : "black",
          color: theme === "light" ? "black" : "white",
          height: "30vh",
          padding: "20px"
        }}
      >
        <h1>Active Theme: {theme}</h1>
        <button onClick={toggle}>Change Theme</button>
      </div>
    </>
  );
}
