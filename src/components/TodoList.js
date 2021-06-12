import React, { useContext, useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import FolderIcon from "@material-ui/icons/Folder";
import { makeStyles } from "@material-ui/core/styles";
import { TodoListContext } from "../context/Context";
import {
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Avatar,
  IconButton,
  lighten,
} from "@material-ui/core";

function TodoList() {
  const { todoArray } = useContext(TodoListContext);

  const getTodos = () => {
    return todoArray.map((todo) => {
      return (
        <div>
          <ul>
            <li>{todo.todo}</li>
          </ul>
        </div>
      );
    });
  };

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));

  const classes = useStyles();

  return <div>{getTodos()}</div>;
}

export default TodoList;
