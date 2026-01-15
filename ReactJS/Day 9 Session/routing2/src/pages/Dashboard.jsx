import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <ul style={{ display: "flex", gap: "10px" }}>
        <Link to="profile">Profile</Link>
        <Link to="settings">Settings</Link>
        <Link to="billing">Billing</Link>
      </ul>
      <hr />
      <Outlet />
    </>
  );
}
