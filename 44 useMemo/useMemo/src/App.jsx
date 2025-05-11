import { useState } from "react";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(100);
  const multiplication = useMemo(
    function multiply() {
      console.log("multiply");
      return add * 10;
    },
    [add]
  );
  return (
    <center>
      <h1>Learning useMemo</h1>
      <h2>{multiplication}</h2>
      <h2>Count: {add}</h2>
      <button onClick={() => setAdd(add + 1)}>Addition</button>
      <h2>Count: {sub}</h2>
      <button onClick={() => setSub(sub - 1)}>Subtraction</button>
    </center>
  );
}

export default App;
