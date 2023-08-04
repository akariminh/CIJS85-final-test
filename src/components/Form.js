import { useState } from "react";

export const Form = (props) => {
  const { onAddNewTodo } = props;
  const [todo, setTodo] = useState([]);
  const initialState = { task: "" };
  const inputTextHandler = (e) => {
    const inputText = e.target.value;
    setTodo({ ...todo, task: inputText, isCompleted: false });
  };
  const onSubmitTodoHandler = (e) => {
    e.preventDefault();
    onAddNewTodo(todo);
    setTodo({ ...initialState });
  };
  return (
    <div>
      <form className="my-form" onSubmit={onSubmitTodoHandler}>
        <input
          type="text"
          value={todo.task}
          className="form-input"
          placeholder="Enter your task here..."
          onChange={inputTextHandler}
        />
        <button className="form-btn" type="submit">
          ADD
        </button>
      </form>
    </div>
  );
};
