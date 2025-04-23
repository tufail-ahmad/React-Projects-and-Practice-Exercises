import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";
import ListEmptyMsg from "./components/ListEmptyMsg";
import "./App.css";
import { useState } from "react";

function App() {
  let [foodItems, setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value;
      event.target.value = "";
      let newItems = [...foodItems, newFoodItem];
      setFoodItems(newItems);
    }
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleKeyDown={onKeyDown}></FoodInput>
      <ListEmptyMsg items={foodItems}></ListEmptyMsg>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
