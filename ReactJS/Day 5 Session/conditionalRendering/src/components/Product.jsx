export default function Product({ name, price, inStock }) {
  return (
    <>
      <h3>{name}</h3>
      <p>
        <strong>₹{price}</strong>
      </p>
      <p style={{ color: inStock ? "green" : "red" }}>
        {inStock ? "in Stock" : "Out of Stock"}
      </p>
    </>
  );
}
