import { fetchUsers } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function Users() {
    const dispatch = useDispatch();
    const { loading, error, users } = useSelector(state => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    // console.log(users);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error occurred while request</p>;

    return (
        <>
            <h2>List of Users</h2>
            <div className="container" >
                {users.length == 0 && <p>Nothing to show here!</p>}
                {users.map((u, index) => <User key={u.id} user={u} index={index} />)}
            </div>

        </>
    )
};

function User({ user, index }) {

    return (
        <div className="">
            <h3>{index+1}. username: {user.username}</h3>
            <p>Email: <i>{user.email}</i></p>
            <strong>Name: {user.name}</strong><br /><br />
            <span>Website: <a href={user.website} target="_blank" >{user.website}</a></span>
        </div>
    )
}