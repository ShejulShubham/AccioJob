import { useMemo, useState } from "react";

function generateReport(data) {
  let total = 0;
  for (let i = 0; i < 400000000; i++) {}
  data.forEach((d) => (total += d));
  console.log("Generating report...");
  return total;
}

export default function GenerateReport() {
  const [showInfo, setShowInfo] = useState(false);
    const [sales, setSales] = useState([120, 340, 560, 220]);
//   const sales = [120, 340, 560, 220];

  const reportTotal = useMemo(() => {
    return generateReport(sales);
  }, [sales]);

  // const reportTotal = generateReport(sales);

  return (
    <div>
      <h2>Total Sales: {reportTotal}</h2>

      <button onClick={() => setShowInfo(!showInfo)}>Toggle Info</button>

      {showInfo && <p>Quarterly sales summary</p>}
    </div>
  );
}
