import FoodItems from "./components/FoodItems";
import ListEmptyMsg from "./components/ListEmptyMsg";
import "./App.css";

function App() {
  let foodItems = ["Milk", "Green Vegetables", "Ghee", "Dal", "Salad"];

  return (
    <>
      <h1>Healthy Food</h1>
      <ListEmptyMsg items={foodItems}></ListEmptyMsg>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
