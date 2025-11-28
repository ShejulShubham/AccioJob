import { useEffect, useState } from "react";
import "./App.css";
import Users from "./Components/Users";
import SearchUsers from "./Components/SearchUsers";
import ReRender from "./Components/ReRender";
import Message from "./Components/Message";
import TitleUpdate from "./Components/TitleUpdate";
import TwoUseEffects from "./Components/TwoUseEffects";
import ConditionalUseEffect from "./Components/ConditionalUseEffect";
import MultipleDependencies from "./Components/MultipleDependencies";
import PreventUseEffect from "./Components/PreventUseEffect";
import ColorChange from "./Components/ColorChange";
import LongText from "./Components/LongText";
import Selected from "./Components/Selected";
import TwoStates from "./Components/TwoStates";
import SearchResult from "./Components/SearchResult"
import AutoCounter from "./Components/AutoCounter";
import PropEffect from "./Components/PropEffect";

function App() {
  //style={{ marginTop: "100px" }}
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //useEffect gets called as a side effect
  //try with or without dependency array and with empty dependency array.
  useEffect(() => {
    // console.log("useEffect Called!");
  });

  return (
    <>
      <div className="app-shell">
        <div className="assignment-card">
          <h1>Hello World!</h1>
          <button onClick={() => setCount((prev) => prev + 1)}>
            Count: {count}
          </button>
          <input
            type="text"
            onChange={(e) => {
              setText(e.target.value);
            }}
          ></input>
          <p>{text}</p>

          <Users />
          <br />
          <SearchUsers />
          <br />
          <ReRender />
          <br />
          <Message />
          <br />
          <TitleUpdate />
          <br />
          <TwoUseEffects />
          <br />
          <ConditionalUseEffect />
          <br />
          <MultipleDependencies />
          <br />
          <PreventUseEffect />
          <br />
          <ColorChange />
          <br />
          <LongText />
          <br />
          <Selected />
          <br />
          <TwoStates />
          <br />
          <SearchResult />
          <br />
          <AutoCounter />
            <br />
          <PropEffect />
          <br />
          

        </div>
      </div>
    </>
  );
}

export default App;
