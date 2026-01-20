import { useUserContext } from "../context/UserContext";

export default function ContextAPI() {
  const { username, userSetting } = useUserContext();

  return (
    <>
      <h1>Context API use</h1>
      <h2>Hi! {username}</h2>
      <h3>
        Current Theme: <i style={{ fontSize: "30px" }}>{userSetting.isDarkMode ? "Dark" : "Light"}</i>
      </h3>
    </>
  );
}
