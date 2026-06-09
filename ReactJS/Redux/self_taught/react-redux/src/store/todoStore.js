import { createSlice, configureStore } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: {
    list: [],
  },
  reducers: {
    addTodo: (state, action) => {
      state.list.push({
        text: action.payload,
        id: Date.now(),
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const exitingTodo = state.list.find((li) => li.id === action.payload);
      exitingTodo.completed = exitingTodo.completed ? false : true;
    },
  },
});

export const { addTodo, toggleTodo } = todoSlice.actions;
export const todoStore = configureStore({
  reducer: {
    todo: todoSlice.reducer,
  },
});
