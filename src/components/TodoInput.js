import React, { useState, useContext } from "react";
import { TodoInputContext } from "../context/Context";
import { Button, TextField } from "@material-ui/core";

function TodoInput() {
  const { addTodo, clearItems } = useContext(TodoInputContext);
  const [todo, setTodo] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  return (
    <div>
      <form action='submit' onSubmit={handleOnSubmit}>
        <div className='buttons'>
          <input
            className='input-field'
            id='outlined-basic'
            placeholder='Add Some Todo Items'
            variant='outlined'
            type='text'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />

          <span>
            <button
              id='add-btn'
              type='submit'
              variant='contained'
              color='primary'
            >
              Add Todo
            </button>
          </span>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
