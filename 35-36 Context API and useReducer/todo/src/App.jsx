import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { TodoItemsContext } from "./store/todo-items-store";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (todoName, todoDueDate) => {
    const newTodo = {
      id: Math.floor(Math.random() * 1000),
      name: todoName,
      dueDate: todoDueDate,
    };
    setTodoItems((prevTodoItems) => [...prevTodoItems, newTodo]);
  };
  const deleteItem = (todoId) => {
    const newTodoItems = todoItems.filter((item) => item.id !== todoId);
    setTodoItems(newTodoItems);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems,
        addNewItem,
        deleteItem,
      }}
    >
      <center>
        <TodoName />
        <AddTodo />
        <WelcomeMsg></WelcomeMsg>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
