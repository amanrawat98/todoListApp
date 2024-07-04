import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/todoSlice';


const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');  // Get the state from localstorage
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
    localStorage.setItem('reduxState', serializedState);  // storing current state into localstorage
  } catch (err) {
    console.error('Failed to save state:', err);
  }
};


const store = configureStore({
  reducer: {
    todolistStore: counterReducer,
  },
  preloadedState: loadState(),  // For first time the val will be undefined and after that everytime the windlow is loaded value will be last stored state
});


store.subscribe(() => {
  saveState(store.getState());   // savestate function will call whenever state in store changes
                                // getState function will get current state.
});

export default store;
