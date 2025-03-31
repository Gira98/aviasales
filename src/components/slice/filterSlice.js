import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    filter: 'cheapest',
  },
  reducers: {
    toggledFilter(state, action) {
      state.filter = action.payload.name
    }
  }
})

export const selectFilter = (state) => state.filter.filter

export const { toggledFilter } = filterSlice.actions

export default filterSlice.reducer

