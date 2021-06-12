import React, { useState } from "react";
import { TodoInputContext, TodoListContext } from "./context/Context";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

function App() {
  const initialTodos = window.localStorage.getItem("todos")
    ? JSON.parse(window.localStorage.getItem("todos"))
    : [];

  const [todoArray, setTodoArray] = useState([initialTodos]);

  const addTodo = (todo) => {
    let updatedTodoArray = [
      ...todoArray,
      {
        id: uuidv4(),
        todo,
      },
    ];
    setTodoArray(updatedTodoArray);
  };

  const showTodoInput = () => {
    return (
      <TodoInputContext.Provider value={{ addTodo, todoArray }}>
        <TodoInput />
      </TodoInputContext.Provider>
    );
  };

  const showTodoList = () => {
    return (
      <TodoListContext.Provider value={{ todoArray }}>
        <TodoList />
      </TodoListContext.Provider>
    );
  };

  return (
    <div className='App' style={{ textAlign: "center" }}>
      {showTodoInput()}
      {showTodoList()}
    </div>
  );
}

export default App;
