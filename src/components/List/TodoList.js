import React, { useContext } from "react";
import { TodoListContext } from "../context/Context";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginRight: 25,
    display: "flex",
    alignItems: "center",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    "& > *": {
      margin: 1,
    },
  },

  todoAndButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 25,
  },
  paper: {
    fontSize: "20px",
  },
});

function TodoList() {
  const { todoArray, deleteTodoById } = useContext(TodoListContext);
  const classes = useStyles();

  return (
    <form action=' submit'>
      {todoArray.map((item) => {
        return (
          <div className={classes.todoAndButton}>
            <Card className={classes.root} variant='outlined'>
              <Paper elevation={3}>{item.todo}</Paper>
            </Card>
            <Button
              onClick={() => deleteTodoById(item.id)}
              variant='contained'
              color='primary'
              size='small'
            >
              Delete Item
            </Button>
            <Button
              type='submit'
              variant='contained'
              color='primary'
              size='small'
            >
              Edit
            </Button>
          </div>
        );
      })}
    </form>
  );
}

export default TodoList;
