import styles from "./ButtonContainer.module.css";
import { TbBackspace } from "react-icons/tb";

const ButtonContainer = ({ onButtonClick }) => {
  const btnNames = [
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
    <TbBackspace />,
    "=",
  ];
  return (
    <div className={styles.btnContainer}>
      {btnNames.map((buttonName) => (
        <button
          key={buttonName}
          className={styles.btn}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};

export default ButtonContainer;
