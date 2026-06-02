import AdminPanel from "./AdminPanel";
import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

export default function AdminArea() {
  const newUser = {
    name: "admin user",
    role: "admin",
  };

  return (
    <>
      <h2>AdminArea</h2>
      <UserContext.Provider value={newUser}>
        <div>
          <AdminPanel />
        </div>
      </UserContext.Provider>
    </>
  );
}
