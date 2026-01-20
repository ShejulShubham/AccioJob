import { createContext, useContext, useState } from "react";

const userContext = createContext();

export default function UserProvider({ children }) {
  const [userSetting, setUserSetting] = useState({
    isDarkMode: false,
  });
  const username = "Coqui";

  function toggleTheme() {
    setUserSetting((prev) => ({ ...prev, isDarkMode: !prev.isDarkMode }));
    document.body.style.backgroundColor = userSetting.isDarkMode
      ? "#fff"
      : "#111";
    document.body.style.color = userSetting.isDarkMode ? "#111" : "#fff";
  }

  return (
    <userContext.Provider value={{ username, userSetting, toggleTheme }}>
      {children}
    </userContext.Provider>
  );
}

export function useUserContext() {
  return useContext(userContext);
}
