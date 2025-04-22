import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import FoodItems from "./components/FoodItems";
import ListEmptyMsg from "./components/ListEmptyMsg";
import "./App.css";

function App() {
  let foodItems = ["Milk", "Green Vegetables", "Ghee", "Dal", "Salad"];

  let textToShow = "Food Item entered by user";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <p>{textToShow}</p>
      <ListEmptyMsg items={foodItems}></ListEmptyMsg>
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App;
