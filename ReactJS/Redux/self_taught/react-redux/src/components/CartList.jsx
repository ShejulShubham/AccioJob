import { useSelector, useDispatch } from "react-redux";
import { cartStore } from "../store/cartStore";
import { addItem, removeItem, clearCart } from "../store/cartStore";
import { useState } from "react";

export default function CartList() {
  const [newItem, setNewItem] = useState({
    id: 0,
    name: "",
    quantity: 1,
    price: "",
  });

  let items = useSelector((state) => state.cart.items);

  const dispatch = useDispatch();

  function handleChange(e) {
    const name = e.target.name;
    setNewItem({
      ...newItem,
      id: newItem.id + 1,
      [name]: name == "price" ? Number(e.target.value) : e.target.value,
    });
  }

  return (
    <>
      <h2>Redux Cart Store</h2>
      {items.length == 0 ? (
        <div
          style={{
            padding: "40px",
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          <p>No item exist! add item to begin.</p>
        </div>
      ) : (
        <div
          style={{
            padding: "40px",
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          {items.map((i) => {
            return (
              <div key={i.id}>
                <p>id: {i.id}</p>
                <p>Name: {i.name}</p>
                <p>Price: {i.price}</p>
                <p>Quantity: {i.quantity}</p>
                <button
                  style={{ background: "red" }}
                  onClick={() => dispatch(removeItem(i.id))}
                >
                  delete
                </button>
              </div>
            );
          })}
          <br />
          <br />
          <button onClick={()=>dispatch(clearCart())}>Clear Cart</button>
        </div>
      )}
      <div>
        <h3>Add item</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(addItem(newItem));
          }}
        >
          <input
            value={newItem.name}
            name="name"
            placeholder="enter name"
            onChange={handleChange}
          />
          <input
            value={newItem.price}
            name="price"
            placeholder="enter price"
            onChange={handleChange}
          />
          <button type="submit">add item</button>
        </form>
      </div>
    </>
  );
}
