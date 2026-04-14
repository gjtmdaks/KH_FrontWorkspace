import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "../type/todo";

let nextId = 1;

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: nextId++,
        text: action.payload,
        completed: false,
      });
    },

    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
    },

    toggleTodo: (state, action) => {
      const target = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (target) {
        target.completed = !target.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;