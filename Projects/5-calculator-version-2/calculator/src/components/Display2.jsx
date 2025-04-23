import styles from "./Display2.module.css";

const Display2 = ({ display2Value }) => {
  return <input readOnly className={styles.display2} value={display2Value} />;
};

export default Display2;
