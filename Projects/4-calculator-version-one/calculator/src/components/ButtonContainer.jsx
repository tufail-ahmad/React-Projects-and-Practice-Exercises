import styles from "./ButtonContainer.module.css";

const ButtonContainer = () => {
  const btnArr = [
    "AC",
    "(",
    ")",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ".",
    "X",
    "=",
  ];
  return (
    <div className={styles.btnContainer}>
      {btnArr.map((button) => (
        <button key={button} className={styles.btn}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
