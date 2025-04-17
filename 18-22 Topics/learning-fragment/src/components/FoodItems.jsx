import Item from "./Item";

function FoodItems({ items }) {
  return (
    <ul class="list-group">
      {items.map((item) => (
        <Item key={item} item={item}></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
