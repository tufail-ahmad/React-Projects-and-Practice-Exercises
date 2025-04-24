import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleAddTodo = (todoName, todoDueDate) => {
    const newTodo = {
      name: todoName,
      dueDate: todoDueDate,
    };
    setTodoItems((prevTodoItems) => [...prevTodoItems, newTodo]);
  };
  const handleDeleteTodo = (index) => {
    setTodoItems((prevTodoItems) => {
      const newTodoItems = [...prevTodoItems];
      newTodoItems.splice(index, 1);
      return newTodoItems;
    });
  };

  return (
    <center>
      <TodoName />
      <AddTodo onNewItem={handleAddTodo} />
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoItems={todoItems}
        onDeleteItem={handleDeleteTodo}
      ></TodoItems>
    </center>
  );
}

export default App;
