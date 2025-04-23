import styles from "./Item.module.css";

function Item({ item, bought, handleBuyButton }) {
  return (
    <li className={`list-group-item ${bought && "active"}`}>
      <span className={styles.kgSpan}>{item}</span>
      <button
        className={`${styles.button} btn btn-info`}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
}

export default Item;
