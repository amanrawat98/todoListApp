import { createSlice } from '@reduxjs/toolkit';

let initialState = [];  // Initial state 

export const counterSlice = createSlice({
  name: 'todolistStore',
  initialState,
  reducers: {
    handleDelete: (state, action) => {
      return state.filter((item, index)=> index !== action.payload);  // delete the todoitem 
    },
    addItem: (state, action) => {
      state.push(action.payload);  //to add new item in todo array
    },
    updateItem: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const index = state.findIndex(item => item.id === id);  //find the item in todo with given id
      if (index !== -1) {
        state[index].todo = updatedTodo;  // updates the value of todo 
      }
    },
    updateCheckValue: (state, action) => {
      const index = action.payload;
      state[index].checkvalue = !state[index].checkvalue; // toggle the current checkvalue
    },
  },
});

export const { handleDelete, addItem, updateItem, updateCheckValue } = counterSlice.actions;  // Export actions

export default counterSlice.reducer; // Export reducer
