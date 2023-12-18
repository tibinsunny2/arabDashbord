// todosSlice.js
import { createSlice } from '@reduxjs/toolkit';

const UebrSlice = createSlice({
  name: 'UBER_DATA',
  initialState: [],
  reducers: {
    addUser: (state, action) => {
    state.push(action.payload);
    },
  },
});

export const { addUser } = UebrSlice.actions;
export default UebrSlice.reducer;
