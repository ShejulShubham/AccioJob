import { useMemo, useState } from "react";

export default function SignupPreview() {
  const [input, setInput] = useState("");
  const [help, setHelp] = useState(false);

  let result = true;

  function heavyValidation() {
    let t = 0;

    for (let i = 0; i < 1_000_000_00; i++) {
      t += i;
    }

    console.log("Heavy Validation Ran!", t);
    return input.trim().length > 4;
  }

  result = useMemo(() => {
    return heavyValidation();
  }, [input]);

  return (
    <>
      <h1>Signup Preview</h1>

      <button onClick={() => setHelp((prev) => !prev)}>Ask Help</button>
      {help && <span>Hey you wanted a little help?</span>}
      <input
        type="text"
        placeholder="type name"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={heavyValidation}>Submit</button>
      <h3>Result: {!result && "Username must be 4 characters long"}</h3>
    </>
  );
}
