import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Login() {
  const [input, setInput] = useState("");
  let { user, login, logout } = useContext(AuthContext);

  return (
    <>
      {!user && (
        <>
          <input
            type="text"
            placeholder="Enter username"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={() => {
              login(input), setInput("");
            }}
          >
            Login
          </button>
        </>
      )}
    </>
  );
}
