import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  let todoItems = [
    {
      name: "Buy Milk",
      dueDate: "16-04-2025",
    },
    {
      name: "Go To College",
      dueDate: "16-04-2025",
    },
    {
      name: "Ride Bike",
      dueDate: "16-04-2025",
    },
  ];
  return (
    <center>
      <TodoName />
      <AddTodo />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
