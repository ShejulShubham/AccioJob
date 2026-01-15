import { useState } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  // let theme = "light";

  function toggle() {
    setTheme(theme === "light" ? "dark" : "light");
    // if (theme === "light") {
    //   theme = "dark";
    // } else {
    //   theme = "light";
    // }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}
