import { useState, createContext, useContext } from "react";

const NotificationContext = createContext();

export default function NotificationProvider({ children }) {
  const [message, setMessage] = useState("");

  function showMessage(text = "You have a new notification!") {
    // if (!text) {
    //   console.log("working!");
    //   setMessage("You have a new notification!");
    // } else {
    //   setMessage(text);
    // }

    setMessage(text);
  }

  function clearMessage() {
    setMessage("");
  }

  return (
    <NotificationContext.Provider
      value={{ message, showMessage, clearMessage }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotificationContext() {
  return useContext(NotificationContext);
}
