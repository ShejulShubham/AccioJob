import B from "./B";

function A() {
  console.log("Component A Rendered!");
  return (
    <>
      {/* <h2>In Component A: {user}</h2> */}
      <B />
    </>
  );
}

export default A;