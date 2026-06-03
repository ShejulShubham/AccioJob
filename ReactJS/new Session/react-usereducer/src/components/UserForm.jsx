import { useState, useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  course: "",
  isSubmitted: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "change":
      return { ...state, [action.field]: action.payload };
    case "name":
      return { ...state, name: action.name };
    case "email":
      return { ...state, email: action.email };
    case "course":
      return { ...state, course: action.course };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function UserForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function submit(event) {
    event.preventDefault();
    alert(`${state.name} ${state.email} ${state.course}`);
  }

  function handleChange(event) {
    dispatch({
      type: "change",
      field: event.target.name,
      payload: event.target.value,
    });
  }

  console.log("USER FORM RENDERED");

  return (
    <>
      <h2>User Form</h2>
      <form>
        <input
          type="text"
          name="name"
          placeholder="enter name"
          value={state.name}
          onChange={handleChange}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="enter email"
          value={state.email}
          onChange={handleChange}
        />
        <br />
        <select name="course" value={state.course} onChange={handleChange}>
          <option value={"none"}>select from option</option>
          <option value={"REACT"}>React</option>
          <option value={"JS"}>javascript</option>
          <option value={"NODE"}>Node</option>
          <option value={"MONGODB"}>MongoDB</option>
        </select>
        <br />
        <button onClick={submit} type="submit">
          Submit
        </button>
        <br />
      </form>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </>
  );
}
