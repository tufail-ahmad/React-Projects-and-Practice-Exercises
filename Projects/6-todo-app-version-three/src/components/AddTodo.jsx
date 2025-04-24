function AddTodo({ onNewItems }) {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">
          <input type="text" />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-success kg-btn"
            onClick={onNewItems}
          >
            <i className="fa-solid fa-plus"></i>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
