import { useState } from "react";

export default function AddItems() {
  const [items, setItems] = useState([]);

  function addItem() {
    const newItem = {
        id: items.length + 1,
        value: Math.floor(Math.random() * 10) + 1,
    };

    setItems((prev) => [...prev, newItem]);
  }

  return (
    <>
      <button onClick={addItem}>Add New Item</button>

      {items.length == 0 && <h2>No Items on the list</h2>}
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            Item id: {item.id}, Item value: {item.value}
          </li>
        ))}
      </ul>
    </>
  );
}
