import { useCounterContext } from "../context/CounterProvider";

export default function CounterDisplay() {
  const { counter } = useCounterContext();

  return <h1>Counter : {counter}</h1>;
}
