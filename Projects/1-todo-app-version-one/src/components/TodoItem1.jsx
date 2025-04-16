function TodoItem1() {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-4">Buy Milk</div>
        <div className="col-4">16-04-2025</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem1;
