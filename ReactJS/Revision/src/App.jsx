import Parent from "./components/Parent";
import AddItem from "./components/AddItems";
import ContextAPI from "./components/ContextAPI";
import UserProvider from "./context/UserContext";
import Header from "./components/Header";

function App() {
  return (
    <>
      <UserProvider>
        <Header />
        <Parent />
        <AddItem />
        <ContextAPI />
      </UserProvider>
    </>
  );
}

export default App;
