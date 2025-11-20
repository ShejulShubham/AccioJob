import "./App.css";
import FontSizeSlider from "./components/FontSizeSlider"
import RandomNumber from "./components/RandomNumber"

function App() {
  return (
    <>
      <div className="app-shell">
        <div className="assignment-card">
          <FontSizeSlider />
          <RandomNumber />
        </div>
      </div>
    </>
  );
}

export default App;
