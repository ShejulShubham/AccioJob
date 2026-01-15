import { useEffect, useRef } from "react";

export default function TrackUser({ stayRef, visitRef }) {
  useEffect(() => {
    visitRef.current++;
    stayRef.current = Date.now();
    return () => {
      stayRef.current = Date.now() - stayRef.current;
      console.log("Number of Visits: ", visitRef.current);
      console.log("Time spent(sec): ", Math.floor(stayRef.current/1000));
    };
  }, []);

  return <h1>Track User</h1>;
}