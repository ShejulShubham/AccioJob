import { Link } from "react-router-dom";
import { users } from "../users";
import {useNavigate} from "react-router-dom"

export default function Home() {
    const navigate = useNavigate();
    
    function goToContact(){


        navigate("/contact");
    }

  return (
    <>
      <h1>Home Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
        <button onClick={goToContact}>go to Contact us</button>
    </>
  );
}
