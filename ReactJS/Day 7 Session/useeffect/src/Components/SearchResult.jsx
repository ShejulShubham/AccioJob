import { useState, useEffect } from "react";

export default function SearchResult() {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    if (search.length < 3) {
      setList([]);
      return;
    }

    fetch(
      `https://jsonplaceholder.typicode.com/users?name_like=${search.trim()}`
    )
      .then((response) => response.json())
      .then((data) => setList(data));
  }, [search]);

  return (
    <>
      <h1>Assignment 12</h1>
      <input
        type="text"
        placeholder="Search...."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      {search.length >= 3 ? (
        <ul>
          {list.length === 0 && <p>No Result Found!</p>}
          {list.map((user) => (
            <li key={user.id}>
              <p>
                User: {user.name}, Email: {user.email}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <strong>Type at least 3 characters...</strong>
      )}
    </>
  );
}
