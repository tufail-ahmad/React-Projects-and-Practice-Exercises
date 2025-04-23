import Display1 from "./components/Display1";
import Display2 from "./components/Display2";
import ButtonContainer from "./components/ButtonContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [display1Value, setDisplay1Value] = useState("");
  const [display2Value, setDisplay2Value] = useState("");

  const onButtonClick = (buttonText) => {
    if (buttonText === "=") {
      setDisplay1Value(eval(display2Value));
      setDisplay2Value("");
    } else if (buttonText === "TbBackspace") {
      let newValue = display2Value.substring(0, display2Value.length - 1);
      setDisplay2Value(newValue);
    } else if (buttonText === "AC") {
      setDisplay1Value("");
      setDisplay2Value("");
    } else {
      setDisplay2Value(display2Value + buttonText);
    }
  };
  return (
    <div className={styles.calContainer}>
      <Display1 display1Value={display1Value}></Display1>
      <Display2 display2Value={display2Value}></Display2>
      <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
    </div>
  );
}

export default App;
