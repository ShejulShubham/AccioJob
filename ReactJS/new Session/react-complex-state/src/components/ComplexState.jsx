import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  password: "",
  address: {
    line: "",
    city: "",
    pincode: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "change":
      return { ...state, [action.field]: action.value };
    case "changeAddress":
      return {
        ...state,
        address: { ...state.address, [action.field]: action.value },
      };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function ComplexState() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(event) {
    const inputField = new Set(["line", "city", "pincode"]);

    if (inputField.has(event.target.name)) {
      dispatch({
        type: "changeAddress",
        field: event.target.name,
        value: event.target.value,
      });

      return;
    }
    dispatch({
      type: "change",
      field: event.target.name,
      value: event.target.value,
    });
  }

  function submitForm(event) {
    event.preventDefault();

    console.log(state);
  }

  return (
    <>
      <h2>User Form</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="enter a name"
          value={state.name}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="email"
          name="email"
          placeholder="enter email"
          value={state.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={state.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="line"
          placeholder="enter address"
          value={state.address.line}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          name="city"
          placeholder="enter city"
          value={state.address.city}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="number"
          name="pincode"
          placeholder="enter address pincode"
          value={state.address.pincode}
          onChange={handleChange}
        />
        <br />
        <br />

        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        <button type="submit" onClick={submitForm}>
          Submit
        </button>
      </form>
    </>
  );
}
