import { useState, createContext, useContext } from "react";

const ViewContext = createContext();

export default function ViewProvider({ children }) {
  const [viewMode, setViewMode] = useState("compact");

  function toggleView() {
    setViewMode((prev) => (prev === "compact" ? "expanded" : "compact"));
  }

  return (
    <ViewContext.Provider value={{ viewMode, toggleView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useViewContext() {
  return useContext(ViewContext);
}
