export default function ProductCard({ title, inStock }) {
  return (
    <>
      <h2>{title}</h2>
      {inStock ? (
        <p style={{ color: "green" }}>✅ Product is in Stock</p>
      ) : (
        <p style={{ color: "crimson" }}>❌ Product is not in stock</p>
      )}
    </>
  );
}
