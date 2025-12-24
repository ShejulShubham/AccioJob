import "./App.css";
import UseCallBack from "./components/UseCallBack";
import FirstAssignment from "./components/FileStatistics";
import MessageCategorization from "./components/MessageCategorization";
import Tollbar from "./components/Toolbar";
import UserCard from "./components/UserCard";
import CombinedCase from "./components/CombinedCase";

function App() {
  return (
    <div className="app-shell">
      <div className="assignment-card">
        <UseCallBack />
        <hr />

        <FirstAssignment />

        <hr />

        <MessageCategorization />

        <hr />

        <Tollbar />

        <hr />

        <UserCard />

        <hr />

        <CombinedCase />
      </div>
    </div>
  );
}

export default App;
