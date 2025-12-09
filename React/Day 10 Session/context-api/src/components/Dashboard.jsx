import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function Dashboard() {
  let { user } = useContext(AuthContext);

  return (
    <div style={{ marginTop: "20px" }}>
      {!user ? (
        <strong>Please login to view dashboard</strong>
      ) : (
        <>
          <h2>Welcome to your Dashboard</h2>
          <strong>{user}</strong>
        </>
      )}
    </div>
  );
}
