import { useMemo, useRef, useState } from "react";

const products = [
  "mouse",
  "keyboard",
  "pen",
  "pencil",
  "laptop",
  "charger",
  "mobile",
  "calculator",
];

export default function ProductSearch() {
  const [showPreview, setShowPreview] = useState(false);
  const [search, setSearch] = useState("");

  const filteredProduct = useMemo(() => {
    console.log("filter ran!");
    return products.filter((p) =>
      p.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  return (
    <>
      <h1>Product Search</h1>
      <button onClick={() => setShowPreview((prev) => !prev)}>
        Toggle Preview
      </button>
      {showPreview && <span>Some Preview</span>}
      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={handleSearch}
      />
      <ul>
        {filteredProduct.map((p, index) => (
          <li key={index}>{p}</li>
        ))}
      </ul>
    </>
  );
}
