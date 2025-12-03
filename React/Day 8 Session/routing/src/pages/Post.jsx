import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const [post, setPost] = useState(null);
    // let post = null;

  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, []);

  if (post) {
    return (
      <>
        <h1>Title: {post.title}</h1>
        <p>
          <strong>Content: </strong>
          {post.body}
        </p>
      </>
    );
  }

  return <h1>No Post Fount!</h1>;
}
