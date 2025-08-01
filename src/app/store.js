import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../features/filter/filterSlice.js";
import todoListSlice from "../features/todo-list/todoListSlice.js";

export const store = configureStore({
  reducer: {
    filter: filterSlice,
    todoList: todoListSlice,
  },
});