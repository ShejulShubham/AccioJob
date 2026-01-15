import { useState, useMemo } from "react";

const fileSizes = [10, 20, 80, 60, 40, 50, 90, 30];

export default function FileStatistics() {
  const [showGuide, setShowGuide] = useState(false);

  function calculateFileDetails() {
    let total = 0;
    let max = 0;

    total = fileSizes.reduce((sum, size) => sum + size, 0);
    max = Math.max(...fileSizes);

    console.log("calculating stats...");
    return { total, max };
  }

  const { total, max } = useMemo(calculateFileDetails, []);

  return (
    <>
      <h1>File Size Statistics</h1>
      <button onClick={() => setShowGuide((prev) => !prev)}>
        {showGuide ? "Hide" : "Show"} Guidlines
      </button>
      {showGuide && <span>This will not trigger re-calculation function</span>}
      <p>Total Size of files: {total}</p>
      <p>Max size from files: {max}</p>
    </>
  );
}
