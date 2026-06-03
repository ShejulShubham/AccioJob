import { useState } from "react";
import "./App.css";
import CounterUseReducer from "./components/CounterUseReducer";
import TemperatureConversion from "./components/TemperatureConversion";
import UserForm from "./components/UserForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>React Hook: useReducer</h1>
      <CounterUseReducer />
      <br />
      <br />
      <br />
      <TemperatureConversion />
      <br/>
      <br/>
      <br/>
      <UserForm/>
    </>
  );
}

export default App;
