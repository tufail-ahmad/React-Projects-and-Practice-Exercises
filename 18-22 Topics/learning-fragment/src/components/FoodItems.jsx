import Item from "./Item";

function FoodItems({ items }) {
  return (
    <ul className="list-group">
      {items.map((item) => (
        <Item
          key={item}
          item={item}
          handleBuyButton={() => {
            console.log(`${item} bought`);
          }}
        ></Item>
      ))}
    </ul>
  );
}

export default FoodItems;
