import { useState, createContext, useContext } from "react";

const FeatureContext = createContext();

export default function FeatureProvider({ children }) {
  const [isAdvanced, setIsAdvanced] = useState(false);

  function toggleAdvancedMode() {
    setIsAdvanced((prev) => !prev);
  }

  return (
    <FeatureContext.Provider value={{ isAdvanced, toggleAdvancedMode }}>
      {children}
    </FeatureContext.Provider>
  );
}

export function useFeatureContext() {
  return useContext(FeatureContext);
}
