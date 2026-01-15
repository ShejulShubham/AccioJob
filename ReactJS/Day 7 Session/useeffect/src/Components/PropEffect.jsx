import { useEffect, useState } from "react";

export default function PropEffect() {
  const [country, setCountry] = useState("default");

  return (
    <>
      <h1>Assignment 14</h1>
      <select onChange={(e) => setCountry(e.target.value)}>
        <option value={"default"}>Default</option>
        <option value={"India"}>India</option>
        <option value={"USA"}>USA</option>
        <option value={"Japan"}>Japan</option>
        <option value={"Australia"}>Australia</option>
        <option value={"Italy"}>Italy</option>
      </select>
      <h2>Selected Country</h2>
      {country === "default" && <p>Select a country</p>}
      {country !== "default" && <Child country={country} />}
    </>
  );
}

function Child({ country }) {
  useEffect(() => {
    if (country === "default") {
      return;
    }
    console.log("Fetching data for", country);
  }, [country]);

  return <p>Country selected: {country}</p>;
}
