import { useCallback, useState } from "react";
import "./App.css";
import ChildA from "./ChildA";

function App() {
  const [add, setAdd] = useState(0);
  const [count, setCount] = useState(0);
  const Learning = useCallback(() => {
    // This function is memoized and will not be recreated on every render
  }, [count]);
  return (
    <center>
      <h1>Learning useCallback</h1>
      <ChildA Learning={Learning} count={count}></ChildA>
      <h2>Count: {add}</h2>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 2)}>Count</button>
    </center>
  );
}

export default App;
