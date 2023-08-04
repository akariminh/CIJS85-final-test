export const Todo = (props) => {
  const { onUpdateSttHandler, task, id, isCompleted, onDeleteTodoHandler } =
    props || {};
  return (
    <div className="todo-item">
      <input
        className="form-check-input"
        type="checkbox"
        onClick={() => onUpdateSttHandler(id)}
      />
      <label className={isCompleted ? "todo completed" : "todo"}>{task}</label>
      <button className="delete-btn" onClick={() => onDeleteTodoHandler(id)}>
        X
      </button>
    </div>
  );
};
