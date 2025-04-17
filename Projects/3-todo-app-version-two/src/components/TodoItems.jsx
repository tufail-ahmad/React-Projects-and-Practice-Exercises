import TodoItem from "./TodoItem";

function TodoItems({ todoItems }) {
  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <TodoItem
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}
        ></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
