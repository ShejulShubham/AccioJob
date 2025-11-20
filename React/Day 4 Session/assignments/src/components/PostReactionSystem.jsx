import { useState } from "react";

export default function PostReactionSystem() {
  let [likes, setLikes] = useState(0);
  let [comments, setComments] = useState(0);

  return (
    <>
      <h2>Assignment 11</h2>
      <h3>⭐ This is my first react post!</h3>
      <p>
        Likes <strong>{likes}</strong> | Comments <strong>{comments}</strong>
      </p>
      <button onClick={()=>{setLikes(prev=>prev+1)}}>Add Like 👍🏼</button>
      <button onClick={()=>{setComments(prev=>prev+1)}}>Add Comment ✍🏻</button>
    </>
  );
}
