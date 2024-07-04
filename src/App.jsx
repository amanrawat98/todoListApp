import React, { useState } from "react";
import "./App.css";

import TodolistInput from "./components/todolistInput";
import TodoList from "./components/todolist";
import { useDispatch, useSelector } from "react-redux";
import { handleDelete, addItem, updateItem } from "./features/todoSlice";

const App = () => {
  const [todo, setTodo] = useState("");
  const [editId, setEditId] = useState(null);
  const [todoEdit, settodoEdit] = useState(false);
  const [todoId, settodoId] = useState(0);

  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.todolistStore);  // selecting currect store value

  const propsGroup = {
    editId,
    setEditId,
    settodoEdit,
    todoEdit,
    todo,
    setTodo,
  };

  const todoformProps = {
    todo,
    setTodo,
    todoEdit,
    editId,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todoEdit) {
      dispatch(updateItem({ id: editId, updatedTodo: todo }));
      settodoEdit(false);
    } else {
      if (todoList.length == 0) settodoId(0);   // Again start id of items with zero when all items are deleted
      if (todo.length !== 0) {
        dispatch(addItem({ id: todoId, todo, checkvalue:false }));
        let incrementId = todoId + 1;
        settodoId(incrementId);  //set todo item Id
      } else {
        alert("Input Field is Empty");  // if input field is empty and enter button is pressed
      }
    }
    setTodo(""); // Empty inputBox value after TodoItemi is Added
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Things to do App: </h1>
        <TodolistInput handleSubmit={handleSubmit} {...todoformProps} /> 
        <TodoList {...propsGroup} />
      </div>
    </div>
  );
};

export default App;
