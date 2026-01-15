import { useParams } from "react-router-dom";
import {users} from "../users"

export default function User() {
  const { id } = useParams();
  let user = users.find((u) => u.id === Number(id));

  return (
    <>
      {user ? (
        <>
          <h1>User Details</h1>
          <h2>Name: {user.name}</h2>
          <p>Age: {user.age}</p>
          <p>Place: {user.place}</p>
        </>
      ) : (
        <h2>User not Fount!</h2>
      )}
    </>
  );
}
