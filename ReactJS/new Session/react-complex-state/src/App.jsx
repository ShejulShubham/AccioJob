import ComplexState from "./components/ComplexState";
import "./App.css";
import Counter from "./components/Counter";
import ContextReducerStateProvider from "./components/ContextReducerStateProvider";

function App() {
  return (
    <>
      <h1>React Complex State</h1>
      <ComplexState />
      <br />
      <br />
      <br />
      <ContextReducerStateProvider>
        <Counter />
      </ContextReducerStateProvider>
    </>
  );
}

export default App;
