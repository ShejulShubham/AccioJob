import { useState } from "react";

export default function MiniForm() {
  let [formData, setFormData] = useState({
    name: "",
    city: "",
    age: 0,
  });

  function handleInput(property, value) {
    setFormData((prev) => {
      return {
        ...prev,
        [property]: value,
      };
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  return (
    <>
      <h3>Assignment 8</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label>
          Name:
          <input
            name="name"
            placeholder="name"
            value={formData.name}
            onChange={(e) => {
              handleInput("name", e.target.value);
            }}
          ></input>
        </label>

        <label>
          City:{" "}
          <input
            name="city"
            placeholder="city"
            value={formData.city}
            onChange={handleChange}
          ></input>
        </label>

        <label>
          Age:{" "}
          <input
            name="age"
            placeholder="age"
            type="number"
            value={formData.age}
            onChange={handleChange}
          ></input>
        </label>
      </form>

      <h3>Display Info</h3>
      <p>Name: {formData.name}</p>
      <p>City: {formData.city}</p>
      <p>Age: {formData.age}</p>
    </>
  );
}
