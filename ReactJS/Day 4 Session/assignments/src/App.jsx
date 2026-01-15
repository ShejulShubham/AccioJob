import "./App.css";
import FontSizeSlider from "./components/FontSizeSlider"
import PostReactionSystem from "./components/PostReactionSystem";
import RandomNumber from "./components/RandomNumber"

function App() {
  return (
    <>
      <div className="app-shell">
        <div className="assignment-card">
          <FontSizeSlider />
          <RandomNumber />
          <PostReactionSystem />
        </div>
      </div>
    </>
  );
}

export default App;
