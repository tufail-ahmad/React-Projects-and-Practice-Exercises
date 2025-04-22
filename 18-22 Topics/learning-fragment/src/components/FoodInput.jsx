import styles from "./FoodInput.module.css";

const FoodInput = ({ handleOnChange }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food item here"
      className={styles.foodInput}
      onChange={handleOnChange}
    />
  );
};

export default FoodInput;
