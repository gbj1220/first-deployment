import React, { useState, useEffect } from "react";
import { TodoInputContext, TodoListContext } from "./context/Context";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header";

function App() {
  const initialTodos = window.localStorage.getItem("todos")
    ? JSON.parse(window.localStorage.getItem("todos"))
    : [];

  const [todoArray, setTodoArray] = useState(initialTodos);
  const [todoID, setTodoID] = useState(null);

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

  const deleteTodoById = (id) => {
    let newArray = todoArray.filter((todo) => id !== todo.id);
    setTodoArray(newArray);
  };

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todoArray));
  }, [todoArray]);

  return (
    <div className='main-container'>
      <div className='App'>
        <div className='header'>
          <Header />
        </div>
        <div className='buttons-and-items'>
          <div>
            <TodoInputContext.Provider value={{ todoArray, addTodo }}>
              <TodoInput />
            </TodoInputContext.Provider>
          </div>
          <div>
            <TodoListContext.Provider value={{ todoArray, deleteTodoById }}>
              <TodoList />
            </TodoListContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
