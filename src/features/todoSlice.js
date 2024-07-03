import { createSlice } from '@reduxjs/toolkit';

let initialState = [];  // Initial state 

export const counterSlice = createSlice({
  name: 'todolistStore',
  initialState,
  reducers: {
    handleDelete: (state, action) => {
      return state.filter((item, index )=> index !== action.payload);
    },
    addItem: (state, action) => {
      state.push(action.payload);
    },
    updateItem: (state, action) => {
      const { id, updatedTodo } = action.payload;
      const index = state.findIndex(item => item.id === id);
      if (index !== -1) {
        state[index].todo = updatedTodo;
      }
    },
    updateCheckValue: (state, action) => {
      const index = action.payload;
      state[index].checkvalue = !state[index].checkvalue;
    },
  },
});

export const { handleDelete, addItem, updateItem, updateCheckValue } = counterSlice.actions;  // Export actions

export default counterSlice.reducer; // Export reducer
