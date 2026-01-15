import { useState, useEffect } from "react";

export default function SearchUsers() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    if (!query) {
      setResult([]);
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
      .then((response) => response.json())
      .then((data) => setResult(data));
  }, [query]);

  return (
    <>
      <input
        type="text"
        placeholder="Search...."
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <ul>
        {/* {query && */}
        {result.map((user) => (
          <li key={user.id}>
            {user.name} {user.email}
          </li>
        ))}
      </ul>
    </>
  );
}
