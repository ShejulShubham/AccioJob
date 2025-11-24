export default function UserLogging() {
  const isLoggedIn = true;
  const username = "Ujjwal";

  return (
    <>{isLoggedIn ? <p>Welcome {username}</p> : <p>Please login first</p>}</>
  );
}
