import { useCounter } from "./useCounter";

export default function App() {
  const { count, increment } = useCounter();

  return <button onClick={increment}>{count}</button>;
}







