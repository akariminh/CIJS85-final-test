import "./App.css";
import { Form } from "./components/Form";
import { Todo } from "./components/Todo";
import { useState } from "react";
import { FILTER_OPTIONS } from "./utils/constants";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [filterOption, setFilterOptions] = useState(FILTER_OPTIONS.DEFAULT);
  const [todoList, setTodoList] = useState([]);
  const onAddNewTodo = (todo) => {
    const newTodo = { ...todo, id: uuidv4() };
    setTodoList([...todoList, newTodo]);
  };
  const onUpdateSttHandler = (id) => {
    const clickedTodo = todoList.find((todo) => todo.id === id);
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === clickedTodo.id) {
          return { ...clickedTodo, isCompleted: !clickedTodo.isCompleted };
        } else return todo;
      })
    );
  };
  const removeAllTodo = () => {
    setTodoList([]);
  };
  const onDeleteTodoHandler = (id) => {
    const filteredTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(filteredTodoList);
  };
  const filterTodoList = (todoList, filterOption) => {
    let filteredList = [...todoList];
    switch (filterOption) {
      case FILTER_OPTIONS.COMPLETED:
        {
          filteredList = todoList.filter((todo) => todo.isCompleted);
        }
        break;
      case FILTER_OPTIONS.UNCOMPLETED:
        {
          filteredList = todoList.filter((todo) => !todo.isCompleted);
        }
        break;
      case FILTER_OPTIONS.DEFAULT:
      default:
        return filteredList;
    }
    return filteredList;
  };
  const filteredTodoList = filterTodoList(todoList, filterOption);

  return (
    <div className="App">
      <div className="container">
        <header className="title">
          <h1>#todo</h1>
        </header>
        <div className="stt-container">
          <button
            className={
              "filter-btn " +
              (filterOption === FILTER_OPTIONS.DEFAULT ? "active" : "")
            }
            onClick={() => setFilterOptions(FILTER_OPTIONS.DEFAULT)}
          >
            All
          </button>
          <button
            className={
              "filter-btn " +
              (filterOption === FILTER_OPTIONS.COMPLETED ? "active" : "")
            }
            onClick={() => setFilterOptions(FILTER_OPTIONS.COMPLETED)}
          >
            Completed
          </button>
          <button
            className={
              "filter-btn " +
              (filterOption === FILTER_OPTIONS.UNCOMPLETED ? "active" : "")
            }
            onClick={() => setFilterOptions(FILTER_OPTIONS.UNCOMPLETED)}
          >
            Uncompleted
          </button>
        </div>
        <Form
          onAddNewTodo={onAddNewTodo}
          todoList={todoList}
          setTodoList={setTodoList}
        />
        <div className="todo-group">
          {filteredTodoList.map((todo) => (
            <Todo
              key={todo.id}
              {...todo}
              onDeleteTodoHandler={onDeleteTodoHandler}
              onUpdateSttHandler={onUpdateSttHandler}
            />
          ))}
        </div>
        {todoList.length >= 1 ? (
          <button className="btn btn-danger remove-btn" onClick={removeAllTodo}>
            Remove All
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default App;
