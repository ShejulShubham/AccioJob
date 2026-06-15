import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      const newTodo = { id: Date.now(), task: action.payload };
      state.push(newTodo);
    },
    removeTodo(state, action){
        const index = state.findIndex((todo)=>todo.id == action.payload);
        state.splice(index, 1);
    },
    updateGivenTodo(state, action){
        const todo = state.find((todo)=> todo.id == action.payload.id);
        todo.task = action.payload.task.trim();
    }
  },
});

export const { addTodo, removeTodo, updateGivenTodo } = todoSlice.actions;
export default todoSlice.reducer;
