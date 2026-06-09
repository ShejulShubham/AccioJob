import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deposit, withdraw } from "./store";
import "./App.css";
import CartList from "./components/CartList";
import CartSummary from "./components/CartSummary";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  // const [amount, setAmount] = useState("");

  // let balance = useSelector((state) => state.bank.balance);

  // const dispatch = useDispatch();

  // function handleDeposit() {
  //   if (!amount) return;

  //   dispatch(deposit(Number(amount)));
  //   setAmount("");
  // }

  // function handleWithdraw() {
  //   if (!amount) return;

  //   dispatch(withdraw(Number(amount)));
  //   setAmount("");
  // }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>React Redux Toolkit</h1>
      {/* <div
        style={{
          padding: "40px",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        <h1>🏦 Redux Bank Account</h1>
        <h2>Current Balance: ₹{balance}</h2>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          style={{ padding: "8px", marginRight: "10px", fontSize: "16px" }}
        />

        <button
          onClick={handleDeposit}
          style={{
            padding: "8px 16px",
            marginRight: "5px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Deposit
        </button>
        <button
          onClick={handleWithdraw}
          style={{
            padding: "8px 16px",
            backgroundColor: "#f44336",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Withdraw
        </button>
      </div> */}

      <CartList />
      <CartSummary />

        // Need to check this
      <div style={{ padding: "20px" }}>
        <h1 style={{ textAlign: "center" }}>React Redux Practice</h1>
        <TodoList />
        <br />
        <TodoForm />
      </div>
    </>
  );
}

export default App;
