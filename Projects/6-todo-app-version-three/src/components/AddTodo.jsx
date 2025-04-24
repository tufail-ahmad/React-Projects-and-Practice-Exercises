import React, { useState } from "react";
import { MdFormatListBulletedAdd } from "react-icons/md";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [todoDueDate, setTodoDueDate] = useState("");
  const handleTodoNameChange = (e) => {
    setTodoName(e.target.value);
  };
  const handleTodoDueDateChange = (e) => {
    setTodoDueDate(e.target.value);
  };
  const handleAddTodo = () => {
    if (todoName && todoDueDate) {
      onNewItem(todoName, todoDueDate);
      setTodoName("");
      setTodoDueDate("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter todo here..."
            className="form-control kg-input"
            value={todoName}
            onChange={handleTodoNameChange}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control kg-input"
            value={todoDueDate}
            onChange={handleTodoDueDateChange}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-btn"
            onClick={handleAddTodo}
          >
            <MdFormatListBulletedAdd className="kg-icon" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
