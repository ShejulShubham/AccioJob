import { useContext } from "react";
import { UserContext } from "../context/userContext";
// import { ThemeContext } from "../context/ThemeContext";

function C() {
  console.log("Component C Rendered!");

  const user = useContext(UserContext);

//   console.log(useContext(ThemeContext));

  return (
    <>
      <h2>In Component C: {user}</h2>
    </>
  );
}

export default C;