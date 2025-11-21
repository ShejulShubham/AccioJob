import "./App.css";
import Props from "./components/Props";
import Button from "./components/Button";
import Product from "./components/Product";
import DifferentData from "./components/DifferentData";
import ClickCounter from "./components/ClickCounter"
import NewCounter from "./components/NewCounter";
import StepCounter from "./components/StepCounter";
import BoundedCount from "./components/BoundedCount";
import ScoreBoard from "./components/ScoreBoard"

function App() {
  let isActive = false;
  let isDarkMode = false;
  let show = true;

  const user = {
    name: "Aarav",
    age: 21,
    email: "aarav@gmail.com",
    skills: ["HTML", "CSS", "REACT"]
  };


  // if(isActive){
  //   return <p>You are Active!</p>
  // } else {
  //   return <p>You are not Active!</p>
  // }

  return (
    <>
      <div className="app-shell">
        <div className="assignment-card">
          {/* {isDarkMode ? <p>Dark mode ON</p> : <p>Light mode ON</p>}
          {show && <p>You are awesome!!!</p>} */}

          <Props />
          <h2 style={{ marginTop: "100px" }}>TASK 1</h2>
          <Button text="login" color="green" />
          <Button text="signup" color="blue" />
          <Button text="logout" color="crimson" />

          <h2 style={{ marginTop: "100px" }}>TASK 2</h2>
          <Product name="iPhone15" price={1500000} inStock={true} />
          <Product name="Headphones" price={50000} inStock={false} />

          <h2 style={{ marginTop: "100px" }}>TASK 3</h2>
          <DifferentData user={user} />

          <h2 style={{ marginTop: "100px" }}>TASK 4</h2>
            <ClickCounter />

          <h2 style={{ marginTop: "100px" }}>TASK 4</h2>
          <NewCounter />

          <h2 style={{ marginTop: "100px" }}>TASK 4</h2>
            <StepCounter />

          <h2 style={{ marginTop: "100px" }}>TASK 5</h2>
            <BoundedCount />

          <h2 style={{ marginTop: "100px" }}>TASK 6</h2>
            <ScoreBoard />
        </div>
      </div>
    </>
  );
}

export default App;
