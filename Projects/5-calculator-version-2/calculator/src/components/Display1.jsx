import styles from "./Display1.module.css";

const Display1 = ({ display1Value }) => {
  return <input readOnly className={styles.display1} value={display1Value} />;
};

export default Display1;
