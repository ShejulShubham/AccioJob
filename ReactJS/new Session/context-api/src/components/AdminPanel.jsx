import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { PostContext } from "../context/PostContext";

export default function AdminPanel() {
  const { name, role } = useContext(UserContext);

  const { posts, loading, error } = useContext(PostContext);

  if(loading) return <div><p>posts loading...</p></div>

  if(error) return <div><p>{error}</p></div>

  return (
    <>
      <h2>AdminPanel</h2>
      <div>
        <p>New user is {name}</p>
        <p>and it's role is {role}</p>
      </div>
      <h2>Posts</h2>
      {posts.length == 0 && "No posts found!"}
      {posts.length > 0 &&
        posts.map((post) => {
          return (
            <div key={post.id}>
              <h3>{post.id}. {post.title}</h3>
              <p>{post.body}</p>
            </div>
          );
        })}
    </>
  );
}
