import C from "./C";

function B() {
  console.log("Component B Rendered!");
  return (
    <>
      {/* <h2>In Component B: {user}</h2> */}
      <C />
    </>
  );
}

export default B;