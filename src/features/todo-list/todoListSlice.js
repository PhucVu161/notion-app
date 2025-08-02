import { createSlice } from '@reduxjs/toolkit';
const initTodoList = [
  {
    id: 1,
    name: "learn react",
    priority: "High",
    completed: true,
  },
  {
    id: 2,
    name: "learn js",
    priority: "Low",
    completed: false,
  },
  {
    id: 3,
    name: "reading english book",
    priority: "Medium",
    completed: false,
  },
];

const todoListSlice = createSlice({
    name: "todoList",
    initialState: initTodoList,
    reducers:{
        toggleCompleted: (state, action) => {
            const todoChecked = state.find((todo) => todo.id === action.payload)
            if(todoChecked) todoChecked.completed = !todoChecked.completed
        },
        addTodo: (state, action) => {
            state.push(action.payload)
        }
    },
    devTools: true
})

export const { toggleCompleted, addTodo } = todoListSlice.actions;
export default todoListSlice.reducer;