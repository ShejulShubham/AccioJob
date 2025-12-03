import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();

  return (
    <>
      <h2>PRODUCT page</h2>
      <h3>Product with id: {id}</h3>
    </>
  );
}
