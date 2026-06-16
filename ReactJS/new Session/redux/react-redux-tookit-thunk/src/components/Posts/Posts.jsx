import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./postSlice";

export default function Posts() {
    const dispatch = useDispatch();
    const { loading, error, posts } = useSelector(state => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [])

    if (loading) return <p>Loading Posts...</p>
    if (error) return <p>Error occurred!</p>
    return (
        <>
            <h2>List of posts</h2>
            {posts.length == 0 && <p>Posts not found!</p>}
            {posts.length > 0 && posts.map((p, index) => (<Post key={p.id} post={p} index={index} />))}
        </>
    )
};


function Post({ post, index }) {

    return (
        <div>
            <h3>{index + 1}. {post.title}</h3>
            <p>{post.body}</p>
        </div>
    )
}