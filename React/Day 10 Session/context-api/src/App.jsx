import NotificationBar from "./components/NotificationBar";
import NotificationControl from "./components/NotificationControl";
import CounterControls from "./components/CounterControls";
import CounterDisplay from "./components/CounterDisplay";
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import Greeting from "./components/Greeting";
import SettingPanel from "./components/SettingPanel";
import "./App.css";
import CombinedProvider from "./context/CombinedProvider";
import FontProvider from "./context/FontProvider";
import LayoutProvider from "./context/LayoutProvider";

function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        <CombinedProvider>
          <Home />
          <Navbar />
          <Login />
          <Dashboard />
          <hr />
          <Greeting />

          <hr />
          <NotificationControl />
          <NotificationBar />
          <hr />
          <CounterDisplay />
          <CounterControls />
        </CombinedProvider>

        <hr />
        <FontProvider>
          <LayoutProvider>
            <SettingPanel />
          </LayoutProvider>
        </FontProvider>
      </div>
    </div>
  );
}

export default App;
