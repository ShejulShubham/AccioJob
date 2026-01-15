import React, { useState, useMemo } from "react";

export default function UserCard() {
  const [state, setState] = useState(false);

  const user = useMemo(() => {
    console.log("User Generated!");
    return {
      name: "Shubham",
      age: 88,
      place: "Pune",
    };
  }, []);

  return (
    <>
      <h1>User Card</h1>
      <button onClick={() => setState((prev) => !prev)}>
        Trigger Re-Render
      </button>

      {state && <p>You have triggered a re-render</p>}

      <Child user={user} />
    </>
  );
}

const Child = React.memo(({ user }) => {
  console.log("User Card Child Re-Rendered!");
  return (
    <>
      <h1>Child User Card</h1>
      <strong>{user.name}</strong>
      <p>{user.age}</p>
      <p>{user.place}</p>
    </>
  );
});
