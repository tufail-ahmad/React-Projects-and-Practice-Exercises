import TodoName from "./components/TodoName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMsg from "./components/WelcomeMsg";
import "./App.css";
import { TodoItemsContext } from "./store/todo-items-store";
import { useReducer } from "react";

const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "NEW_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      {
        id: action.payload.id,
        name: action.payload.todoName,
        dueDate: action.payload.todoDueDate,
      },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (item) => item.id !== action.payload.id
    );
  }
  return newTodoItems;
};

function App() {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (todoName, todoDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: {
        id: Math.floor(Math.random() * 1000),
        todoName,
        todoDueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };
  const deleteItem = (todoId) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        id: todoId,
      },
    };
    dispatchTodoItems(deleteItemAction);
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
