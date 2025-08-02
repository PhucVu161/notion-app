// prettier-ignore
import { selectTextSearch, selectStatusSelected, selectPrioritiesSelected } from "../filter";
import { createSelector } from "@reduxjs/toolkit";

export const selectTodoList = (state) => state.todoList;
export const selectFilteredTodoList = createSelector(
  [
    selectTextSearch,
    selectStatusSelected,
    selectPrioritiesSelected,
    selectTodoList,
  ],
  (textSearch, statusSelected, prioritiesSelected, todoList) => {
    return todoList
      .filter((todo) => todo.name.includes(textSearch))
      .filter((todo) => {
        switch (statusSelected) {
          case "All":
            return todo;
          case "Completed":
            return todo.completed;
          case "Todo":
            return !todo.completed;
          default:
            return;
        }
      })
      .filter((todo) => {
        return prioritiesSelected.length < 1
          ? true
          : prioritiesSelected.includes(todo.priority);
      });
  }
);
