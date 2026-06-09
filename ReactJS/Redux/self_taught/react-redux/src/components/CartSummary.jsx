import { useSelector } from "react-redux";

export default function CartSummary() {
  const items = useSelector((state) => state.cart.items);

  const totalItems = items.length || "NA";
  const totalAmount =
    items.reduce((accumulator, item) => {
      return accumulator + item.price * item.quantity;
    }, 0) || "NA";

  return (
    <>
      <h3>Card Summary</h3>
      <p>Total Number of Items: {totalItems}</p>
      <p>Total Bill Amount: {totalAmount}</p>
    </>
  );
}
