import { useEffect, useMemo, useState } from "react";

const users = Array.from({ length: 100000 }, (_, i) => ({
  id: i,
  name: `user ${i}`,
}));

export default function FilteredUser() {
  const [search, setSearch] = useState("");
  const [trigger, setTrigger] = useState(false);
  const [filterdUsers, setFilteredUsers] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);

    const task = setTimeout(() => {
      const results = users.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredUsers(results);
      setIsPending(false);
    }, 0);

    return () => clearTimeout(task);
  }, [search]);

  //   TODO: Try doing this using async

  // let filterdUsers = [];

  // filterdUsers = calculate();

  // async function calculate() {
  //   return await new Promise((resolve, reject) => {
  //     console.log("Filter User Ran!");
  //     return resolve(
  //       users.filter((user) => {
  //         return user.name.toLowerCase().includes(search.toLowerCase());
  //       })
  //     );
  //   });
  // }

  return (
    <>
      <h1>Filtered Users</h1>
      <button onClick={() => setTrigger((prev) => !prev)}>Trigger</button>
      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isPending && <p>Filtering...</p>}
      <ul>
        {!filterdUsers &&
          filterdUsers.map((u) => {
            return <li key={u.id}>{u.name}</li>;
          })}
      </ul>
    </>
  );
}
