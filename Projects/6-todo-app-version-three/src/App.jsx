import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  let initialtodoItems = [
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

  const [todoItems, setTodoItems] = useState(initialtodoItems);

  handleAddTodo = (todo) => {
    setTodoItems((prevTodoItems) => {
      return [...prevTodoItems, todo];
    });
  };
  handleDeleteTodo = (index) => {
    setTodoItems((prevTodoItems) => {
      return prevTodoItems.filter((todo, i) => i !== index);
    });
  };

  return (
    <center>
      <TodoName />
      <AddTodo onNewItems={handleAddTodo} />
      <TodoItems todoItems={todoItems}></TodoItems>
    </center>
  );
}

export default App;
