import { useState, useEffect } from "react";

export default function TwoStates() {
  const [age, setAge] = useState(0);
  const [salary, setSalary] = useState(0);

  useEffect(() => {
    if (age > 0 && salary > 0) {
      console.log("Age: ", age);
      console.log("Salary: ", salary);
    }
  }, [age, salary]);

  return (
    <>
      <h1>Assignment 11</h1>
      <p>Age: {age}</p>
      <p>Salary: {salary}</p>
      <button
        onClick={() => {
          setAge((prev) => prev + 1);
        }}
      >
        Increment Age
      </button>
      <button
        onClick={() => {
          setSalary((prev) => prev + 1000);
        }}
      >
        Increment Salary
      </button>
    </>
  );
}
