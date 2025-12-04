import { Link, Outlet } from "react-router-dom";

export default function NestedRoute() {
  return (
    <>
      <ul style={{ display: "flex", gap: "20px" }}>
        <Link to="team">Team</Link>
        <Link to="company">Company</Link>
      </ul>
        <hr />
      <Outlet />
    </>
  );
}
