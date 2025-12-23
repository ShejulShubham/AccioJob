import { useState, useMemo } from "react";

const LOG_TEXT = `
INFO App started
WARN Disk usage high
INFO User logged in
ERROR Database connection failed
INFO Retrying connection
WARN Memory usage high
ERROR Timeout while fetching data
INFO Operation successful
`;

export default function LogAnalyzer() {
  const [showTips, setShowTips] = useState(false);
  const count = useMemo(countWarns, []);

  // TODO: Complete this component
  function countWarns() {
    let warns = 0;
    let errors = 0;

    LOG_TEXT.split("\n").forEach((word) => {
      if (word.includes("WARN")) warns++;
      if (word.includes("ERROR")) errors++;
    });

    console.log("Counting Ran!");

    // setCount({ warns: warns, errors: errors });
    return { warns: warns, errors: errors };
  }

  return (
    <>
      <h1>Log Analyzer</h1>
      <button
        onClick={() => {
          setShowTips((prev) => !prev);
        }}
      >
        {showTips ? "Hide" : "Show"}Tips
      </button>{" "}
      {showTips && <span>Tip: Investigate Error Log First</span>}
      <p style={{ color: "yellow" }}>Number of Warns: {count.warns}</p>
      <strong style={{ color: "red" }}>Number of Errors: {count.errors}</strong>
    </>
  );
}
