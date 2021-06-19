import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "../Input/TodoInput";
import TodoList from "../List/TodoList";
import Header from "../Header/Header";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import yellow from "@material-ui/core/colors/yellow";

import { TodoInputContext, TodoListContext } from "../context/Context";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: teal[400],
      secondary: yellow[200],
    },
  },
  mainApp: {
    margin: "auto",
  },
});

function Home() {
  const initialTodos = window.localStorage.getItem("todos")
    ? JSON.parse(window.localStorage.getItem("todos"))
    : [];

  const [todoArray, setTodoArray] = useState(initialTodos);

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

  const editTodo = () => {};

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todoArray));
  }, [todoArray]);

  return (
    <div className='mainApp'>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <div className='todo-input-context'>
            <TodoInputContext.Provider value={{ todoArray, addTodo }}>
              <TodoInput />
            </TodoInputContext.Provider>
          </div>
          <div className='todo-list-context'>
            <TodoListContext.Provider value={{ todoArray, deleteTodoById }}>
              <TodoList />
            </TodoListContext.Provider>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default Home;
