import { useState, createContext, useContext } from "react";

const LayoutContext = createContext();

export default function LayoutProvider({ children }) {
  const [layout, setLayout] = useState("list");

  function changeLayout() {
    setLayout((prev) => (prev === "grid" ? "list" : "grid"));
  }

  return (
    <LayoutContext.Provider value={{ layout, changeLayout }}>
      {children}
    </LayoutContext.Provider>
  );
}

export function useLayoutContext() {
  return useContext(LayoutContext);
}
