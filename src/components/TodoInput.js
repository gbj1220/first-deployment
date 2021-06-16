import React, { useState, useContext } from "react";
import { TodoInputContext } from "../context/Context";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  textFieldAndSubmitButton: {
    textAlign: "center",
    marginBottom: "25px",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  inputField: {
    width: 500,
    marginRight: -10,
  },
}));

function TodoInput() {
  const classes = useStyles();

  const { addTodo } = useContext(TodoInputContext);

  const [todo, setTodo] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  return (
    <div>
      <form action='submit' onSubmit={handleOnSubmit}>
        <div className={classes.textFieldAndSubmitButton}>
          <TextField
            className={classes.inputField}
            id='outlined-basic'
            label='Add some Todos!'
            variant='outlined'
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          ></TextField>
          <Button
            className={classes.root}
            type='submit'
            variant='contained'
            color='primary'
            size='small'
          >
            Add Todo
          </Button>
        </div>
      </form>
    </div>
  );
}

export default TodoInput;
