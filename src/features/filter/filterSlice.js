import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    textSearch: "",
    statusSelected: "All",
    prioritiesSelected: [],
  },
  reducers: {
    setText: (state, action) => {
      state.textSearch = action.payload;
    },
    setStatus: (state, action) => {
      state.statusSelected = action.payload;
    },
    addPriority: (state, action) => {
      state.prioritiesSelected = state.prioritiesSelected.includes(
        action.payload
      )
        ? state.prioritiesSelected
        : [...state.prioritiesSelected, action.payload];
    },
    deletePriority: (state, action) => {
        state.prioritiesSelected = state.prioritiesSelected.filter(priority => priority !== action.payload)
    }
  },
});
export const { setText, setStatus, addPriority, deletePriority } = filterSlice.actions;
export default filterSlice.reducer;
