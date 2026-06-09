import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUser } from "../store/userStore";

export default function UserList() {
  const dispatch = useDispatch();
  const { data: users, loading, error } = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(fetchUser());
  }, [fetchUser]);

  return (
    <>
      <h2>User from jsonplaceholder</h2>
      <div>
        {users.length != 0 ? (
          <div>
            <ul>
              {users.map((u) => (
                <li key={u.id}>{u.name}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>no uer exist</p>
        )}
      </div>
    </>
  );
}
