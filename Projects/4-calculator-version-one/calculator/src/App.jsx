import Display1 from "./components/Display1";
import Display2 from "./components/Display2";
import ButtonContainer from "./components/ButtonContainer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.calContainer}>
      <Display1></Display1>
      <Display2></Display2>
      <ButtonContainer></ButtonContainer>
    </div>
  );
}

export default App;
