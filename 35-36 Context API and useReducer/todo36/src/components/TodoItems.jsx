import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";
import TodoItem from "./TodoItem";

function TodoItems() {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.id}
          todoId={item.id}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
