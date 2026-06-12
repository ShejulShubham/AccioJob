import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/postAction";

export default function PostList() {

    const dispatch = useDispatch();
    const { loading, error, posts } = useSelector((state) => state);

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    if (loading) return <p>Loading posts...</p>
    if (error) return <p>can't load posts.</p>

    return (
        <>
            <h2 className="text-center">POSTS</h2>
            {posts.length == 0 && <p>No post found!</p>}
            <ul>
                {posts.map((post, index) => (
                    <li key={post.id} >
                        <h3>{index + 1}. {post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}

            </ul>
        </>
    )
}