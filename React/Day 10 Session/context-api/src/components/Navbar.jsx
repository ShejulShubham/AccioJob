import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  let { user, logout } = useContext(AuthContext);

  return (
    <nav style={{ background: "gray", padding: "20px" }}>
      <h1>My App</h1>

      {!user ? (
        <p>Not Logged In</p>
      ) : (
        <>
          <p>Hello {user}</p>
          <button onClick={logout}>Logout</button>
        </>
      )}
    </nav>
  );
}
