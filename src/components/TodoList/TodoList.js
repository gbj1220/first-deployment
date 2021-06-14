import React, { useContext } from "react";
import { TodoListContext } from "../../context/Context";

import "../../App.css";

function TodoList() {
  const { todoArray, deleteTodoById } = useContext(TodoListContext);
  return (
    <div className='main-todo-list'>
      <div className='todo-list'>
        {todoArray.map((todo) => {
          return (
            <ul class='list-group'>
              <li class='list-group-item'>
                {todo.todo}

                <button
                  className='delete-btn'
                  onClick={() => deleteTodoById(todo.id)}
                >
                  Delete
                </button>
              </li>
            </ul>
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
