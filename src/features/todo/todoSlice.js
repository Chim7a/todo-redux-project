import { createSlice } from "@reduxjs/toolkit";
const date = Date.now;
const initialState = {
  userTodos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addNewTodo: (state, action) => {
      const date = new Date();
      state.userTodos = [
        {
          todo_id: Date.now(),
          todo_title: action.payload,
          todo_content: action.payload,
          todo_createdAt: date.toDateString(),
        },
        ...state.userTodos,
      ];
    },
  },
});

export const { addNewTodo } = todoSlice.actions;

export default todoSlice.reducer;
