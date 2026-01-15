import { useState, createContext, useContext } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  let [cart, setCart] = useState([]);

  function addItem(item) {
    setCart([...cart, item]);
  }

  function removeItem(id) {
    setCart(cart.filter((i) => i.id !== id));
  }

  return (
    <>
      <CartContext.Provider value={{ addItem, removeItem }}>
        {children}
      </CartContext.Provider>
    </>
  );
}

export function useCartContext() {
  return useContext(CartContext);
}
