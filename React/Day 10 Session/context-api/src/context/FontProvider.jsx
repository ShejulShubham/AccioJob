import { useState, createContext, useContext } from "react";

const FontContext = createContext();

export default function FontProvider({ children }) {
  const [fontSize, setFontSize] = useState(12);

  function increaseFontSize() {
    if (fontSize > 32) return;
    setFontSize((prev) => prev + 2);
  }

  return (
    <FontContext.Provider value={{ fontSize, increaseFontSize }}>
      {children}
    </FontContext.Provider>
  );
}

export function useFontContext() {
  return useContext(FontContext);
}
