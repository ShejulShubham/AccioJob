import React, { useState, useCallback, useEffect } from "react";

export default function Tollbar() {
  const [showText, setShowText] = useState(false);

  const onSave = useCallback(function save() {
    console.log("Saving...");
  }, []);

  const onExport = useCallback(function exporting() {
    console.log("Exporting...");
  }, []);

  const onPrint = useCallback(function print() {
    console.log("Printing...");
  }, []);

  function trigger() {
    setShowText(true);
    setTimeout(() => {
      setShowText(false);
    }, 1000);
  }

  return (
    <>
      <h1>Tollbar</h1>
      <button onClick={trigger}>Trigger Re-Render</button>
      {showText && <strong>Trigger Re-Render</strong>}
      <Child onSave={onSave} onExport={onExport} onPrint={onPrint} />
    </>
  );
}

const Child = React.memo(({ onSave, onExport, onPrint }) => {
  console.log("Child Re-Render");

  return (
    <>
      <h2>Child Toolbar</h2>
      <button onClick={onSave}>Save</button>
      <button onClick={onExport}>Export</button>
      <button onClick={onPrint}>Print</button>
    </>
  );
});
