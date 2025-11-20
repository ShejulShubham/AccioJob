import { useState } from "react";

export default function ExpenseTracker() {
  let [expenses, setExpenses] = useState([]);
  let [title, setTitle] = useState("");
  let [amount, setAmount] = useState(0);

  //TODO: expense tracker completion

  function addExpense(e) {
    e.preventDefault();

    const trimmedTitle = title;
    const newAmount = Number(amount);

    if (!trimmedTitle || trimmedTitle.length == 0) {
      alert("provide title");
      return;
    }

    if (newAmount <= 0 || !newAmount) {
      alert("provide amount");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title: trimmedTitle,
      amount: newAmount,
    };

    setExpenses((prev) => {
      return [...prev, newExpense];
    });

    console.log(expenses);

    setTitle("");
    setAmount("");
  }

  const total = expenses.reduce((sum, expense) => {
    return sum + expense.amount;
  }, 0);

  return (
    <>
      <h2>Assignment 10</h2>

      <form onSubmit={addExpense}>
        <label>
          Title:{" "}
          <input
            type="text"
            placeholder="Expense title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value.trim());
            }}
          />
        </label>

        <label>
          Amount:{" "}
          <input
            type="number"
            placeholder="Expense Amount"
            value={amount}
            onChange={(e) => {
              setAmount(Number(e.target.value));
            }}
          />
        </label>

        <button type="submit">Add Expense</button>
      </form>

      <h3>Expenses</h3>
      {expenses === 0 && "No expense added"}
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            <tr key={expense.id}>
              <td>{expense.title}</td>
              <td>{expense.amount}</td>
            </tr>;
          })}
        </tbody>
      </table>
      <p>
        <strong>Total: {total}</strong>
      </p>
    </>
  );
}
