import React, { useState, useContext } from "react";
import { TodoInputContext } from "../context/Context";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submitButton: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  textField: {
    "&>*": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function TodoInput() {
  const classes = useStyles();

  const { addTodo, todoArray } = useContext(TodoInputContext);
  const [todo, setTodo] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form action='submit' onSubmit={handleOnSubmit}>
        <div>
          <TextField
            id='outlined-basic'
            label='Add Some Todo Items'
            variant='outlined'
            type='text'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
        </div>
        <div className={classes.submitButton}>
          <Button type='submit' variant='contained' color='primary'>
            Add Todo
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
