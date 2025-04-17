import style from "./Item.module.css";

function Item({ item }) {
  return (
    <li className="list-group-item">
      <span className={style.kgSpan}>{item}</span>
    </li>
  );
}

export default Item;
