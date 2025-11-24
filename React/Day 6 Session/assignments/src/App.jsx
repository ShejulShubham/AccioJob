import "./App.css";
import DiscountMessage from "./components/DiscountMessage";
import UserLogging from "./components/UserLogging";
import DiffComponent from "./components/DiffComponent";
import Greeting from "./components/Greeting";
import MultipleData from "./components/MultipleData";
import ListItems from "./components/ListItems";
import Object from "./components/Object"
import Button from "./components/Button"
import ProductCard from "./components/ProductCard"
import FunctionProp from "./components/FunctionProp";
import PropDrilling from "./components/PropDrilling";
import Card from "./components/Card";
import UserRole from "./components/UserRole"

function App() {

  //style={{ marginTop: "100px" }}

  return (
    <>
      <div className="app-shell">
        <div className="assignment-card">
          <h1>Conditional rendering - Props</h1>
          <h2>Assignment 1</h2>
          <UserLogging />

          <h2 style={{ marginTop: "100px" }}>Assignment 2</h2>
          <DiscountMessage />

          <h2 style={{ marginTop: "100px" }}>Assignment 3</h2>
          <DiffComponent />

          <h2 style={{ marginTop: "100px" }}>Assignment 4</h2>
          <Greeting name="Aarav" city="Delhi" />

          <h2 style={{ marginTop: "100px" }}>Assignment 5</h2>
          <MultipleData name="Jamie" age={32} isOnline={false} />

          <h2 style={{ marginTop: "100px" }}>Assignment 6</h2>
          <ListItems skills={["HTML", "CSS", "Javascript", "ReactJS"]}/>

          <h2 style={{ marginTop: "100px" }}>Assignment 7</h2>
          <Object user={{name: "Levi", age:55, email:"levi@gmail.com"}} />

          <h2 style={{ marginTop: "100px" }}>Assignment 8</h2>
          <Button text={"Makes me happy"} color={"lightgreen"} />
          <Button text={"Looks kinda good"} color={"crimson"} />

          <h2 style={{ marginTop: "100px" }}>Assignment 9</h2>
          <ProductCard title="iPhone" inStock={true} />

          <h2 style={{ marginTop: "100px" }}>Assignment 10</h2>
          <FunctionProp onPress={()=>{return alert("Oouch!")}}/>

          <h2 style={{ marginTop: "100px" }}>Assignment 11</h2>
          <PropDrilling message="Dedicate your heart!" />

          <h2 style={{ marginTop: "100px" }}>Assignment 12</h2>
          <Card greet="Welcome to Home"/>

          <h2 style={{ marginTop: "100px" }}>Assignment 13</h2>
          <UserRole name="Tywin Lannister" role="user"/>

          <h2 style={{ marginTop: "100px" }}>Assignment 14</h2>
          


        </div>
      </div>
    </>
  );
}

export default App;
