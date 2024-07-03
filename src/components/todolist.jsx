import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleDelete, updateItem, updateCheckValue } from "../features/todoSlice";


const TodoList = ({ settodoEdit, setEditId, todoEdit, todo, setTodo}) => {
  const todoList = useSelector(state => state.todolistStore);
  let dispatch = useDispatch();


  
let iditSetting = (itemId)=> {
 let value = todoList[itemId].todo;
  setEditId(itemId);  // set id of todoitem  whose edit button is clicked
  settodoEdit(!todoEdit);
  setTodo(value);  // to set value of input field with todoItem whose  edit button is clicked
}



  return (
    <ul className="allTodos">
      {todoList?.map((item, index) => (
        <li className="singleTodo">
          <input type="checkbox" name="todoitem" value={item.checkvalue} onChange={()=> dispatch(updateCheckValue(index))} />
          <span className="todoText" key={item.id}>
            {item.checkvalue ? <del class="styled-del"> {item.todo} </del> : item.todo }
          </span>
          <button className="buttonstyle2" onClick={()=> iditSetting(index)}>Edit</button>  {/* Button to handle edit */}
          <button className="buttonstyle2" onClick={() => dispatch(handleDelete(index))}>Delete</button>  {/* Button to handle delete */}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;