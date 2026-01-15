import React, { useState, useMemo, useCallback } from "react";

export default function CombinedCase() {
  const [state, setState] = useState(false);
  const [summary, setSummary] = useState({
    name: "shejul",
    laps: 5,
    time: 6,
    breaks: 9,
  });
  //   let summary = null;

  const summaryF = useMemo(() => {
    console.log("Summary created");

    return {
      name: "shubham",
      laps: 5,
      time: 6,
      breaks: 9,
    };
  }, [summary]);

  const refresher = useCallback(() => {
    console.log("Page Refreshing...");
  }, [summary]);

  const changeSummary = useCallback(() => {
    console.log("Summary changed");
    setSummary({
      name: "shubham",
      laps: 2,
      time: 1,
      breaks: 90,
    });
    // setState((prev) => !prev);
  }, []);

  return (
    <>
      <h1>Combined Case</h1>
      <button onClick={() => setState((prev) => !prev)}>
        {state ? "Hide" : "Show"} Status
      </button>
      {state && <span>Your status is online </span>}

      <ReportPanel
        summary={summaryF}
        refresher={refresher}
        changeSummary={changeSummary}
      />
    </>
  );
}

const ReportPanel = React.memo(({ summary, refresher, changeSummary }) => {
  console.log("Report Panel Re-Render.");

  return (
    <>
      <h2>Combined Case Child</h2>
      <button onClick={refresher}>Refresh</button>
      <button onClick={changeSummary}>Change Summary</button>
      <h4>Stats</h4>
      <strong>Name: {summary.name}</strong>
      <p>Laps: {summary.laps}</p>
      <p>Time: {summary.time}</p>
      <p>Breaks: {summary.breaks}</p>
    </>
  );
});
