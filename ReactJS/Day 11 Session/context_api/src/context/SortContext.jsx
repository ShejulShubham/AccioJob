import { useState, createContext, useContext } from "react";

const SortContext = createContext();

export default function SortProvider({ children }) {
  const [sortOrder, setSortOrder] = useState("ascending");

  function toggleSort() {
    setSortOrder((prev) => (prev === "ascending" ? "descending" : "ascending"));
  }

  return (
    <SortContext.Provider value={{ sortOrder, toggleSort }}>
      {children}
    </SortContext.Provider>
  );
}

export function useSortContext() {
  return useContext(SortContext);
}
