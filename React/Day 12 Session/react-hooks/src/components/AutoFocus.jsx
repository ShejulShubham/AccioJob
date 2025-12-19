import { useRef, useEffect } from "react";

export default function AutoFocus() {
  const inpRef = useRef(null);

  function handleFocus() {
    inpRef.current.focus();
  }

  useEffect(() => {
    handleFocus();
  }, []);

  return (
    <>
    <h1>Auto Focus</h1>
      <input ref={inpRef} type="text" placeholder="Type Something..." />
      <br />
      <button onClick={handleFocus}>Focus input</button>
    </>
  );
}
