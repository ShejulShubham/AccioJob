import { useState, useMemo, useEffect } from "react";

const marks = [10, 20, 30, 50, 90, 70, 60, 80];

export default function StudentDetails() {
  const [showDetails, setShowDetails] = useState(false);
  const [average, setAverage] = useState(0);
  //   let average = 0;

  function averageMarks() {
    let result = 0;
    marks.forEach((m) => {
      result += m;
    });

    console.log("Average Marks Run");

    // return Math.floor(result / marks.length);
    setAverage(Math.floor(result / marks.length));
  }

  //   average = useMemo(averageMarks, [marks]);

  function addMarks() {
    marks.push(Math.floor(Math.random() * 100));
    averageMarks();
  }

  return (
    <>
      <h1>Student Details</h1>
      <p>Average Marks: {average}</p>
      <button onClick={addMarks}>Add New Marks</button>
      <button onClick={() => setShowDetails((prev) => !prev)}>
        Show Student Details
      </button>
      {showDetails && <span>Name: Shubham Shejul</span>}
    </>
  );
}
