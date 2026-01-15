import "./App.css";
import AutoFocus from "./components/AutoFocus";
import UseRef from "./components/UseRef";
import ScrollToView from "./components/ScrollToView";
import VideoPlayer from "./components/VideoPlayer";
import RenderTracker from "./components/RenderTracker";
import TrackUser from "./components/TrackUser";
import { useRef, useState } from "react";

function App() {
  const [show, setShow] = useState(true);
  const visitRef = useRef(0);
  const stayRef = useRef(null);

  return (
    <div className="app-shell">
      <div className="assignment-card">
        <UseRef />

        <hr />

        <AutoFocus />

        <hr />

        <VideoPlayer />

        <hr />
        <RenderTracker />

        <hr />
        <button
          onClick={() => {
            setShow((prev) => !prev);
          }}
        >
          Toggle Tracker
        </button>
        {show && <TrackUser visitRef={visitRef} stayRef={stayRef} />}

        <hr />
        <ScrollToView />
      </div>
    </div>
  );
}

export default App;
