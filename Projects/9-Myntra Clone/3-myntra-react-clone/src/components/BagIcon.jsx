import { useSelector } from "react-redux";

const BagIcon = () => {
  const bagItem = useSelector((store) => store.bag);

  return (
    <div className="icon-bag">
      <span className="bag-item-count">{bagItem.length}</span>
    </div>
  );
};

export default BagIcon;
