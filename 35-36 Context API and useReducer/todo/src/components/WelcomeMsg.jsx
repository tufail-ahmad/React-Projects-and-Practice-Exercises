import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import styles from "./WelcomeMsg.module.css";

const WelcomeMsg = () => {
  // Use the useContext hook to access the todoItems context
  // This context provides the current list of todo items
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems; // Extract the todoItems from the context
  // Check if the todoItems array is empty

  return todoItems.length === 0 ? (
    <div className={styles.welcomeMsg}>
      <h2>Welcome to the Todo App!</h2>
      <p>Please add your first todo item.</p>
    </div>
  ) : (
    <div className={styles.welcomeMsg}>
      <h2>Todo List</h2>
      <p>You have {todoItems.length} items in your list.</p>
    </div>
  );
};

export default WelcomeMsg;
