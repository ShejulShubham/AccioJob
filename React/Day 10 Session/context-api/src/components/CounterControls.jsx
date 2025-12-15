import { useCounterContext } from "../context/CounterProvider";

export default function CounterControls() {
  let { counter, increment, decrement } = useCounterContext();

  return (
    <>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement} disabled={counter === 0}>
        Decrement
      </button>
    </>
  );
}
