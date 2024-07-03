import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/todoSlice';


const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Failed to load state:', err);
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch (err) {
    console.error('Failed to save state:', err);
  }
};


const store = configureStore({
  reducer: {
    todolistStore: counterReducer,
  },
  preloadedState: loadState(),
});


store.subscribe(() => {
  saveState(store.getState());
});

export default store;
