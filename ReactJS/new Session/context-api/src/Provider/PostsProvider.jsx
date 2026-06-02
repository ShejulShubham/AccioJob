import { useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";

export default function PostsProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(fetching, 1000);
  }, []);

  async function fetching() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5",
      );
      const data = await response.json();

      setPosts(data);
    } catch (error) {
      console.log("ERROR: ", error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  // console.log(posts);

  return (
    <PostContext.Provider value={{ posts, loading, error }}>
      {children}
    </PostContext.Provider>
  );
}
