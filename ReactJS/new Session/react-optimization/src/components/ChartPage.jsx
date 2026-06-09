import { useEffect } from "react";

export default function ChartPage() {
  function heavyFunction() {
    let result = 0;
    for (let i = 0; i < 1e9; i++) {
      result += i * result;
    }

    console.log("heavy function ran");
    return result;
  }

  useEffect(() => {
    heavyFunction();
  }, []);

  return (
    <div>
      <h2>Analytics Dashboard</h2>
      <p>This is a heavy charting library page...</p>
    </div>
  );
}
