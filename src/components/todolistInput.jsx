import React from "react";

const TodolistInput = ({ handleSubmit, todo,  setTodo,  todoEdit }) => {


  return (
    <form className="todoForm" onSubmit={handleSubmit}>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}  // setting val of todo with value taken from input field
        placeholder="Enter new Task"
      />
      <button type="submit"> {todoEdit ? "Edit" : "Add Task"}</button>
    </form>
  );
};

export default TodolistInput;
