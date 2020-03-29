import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'notifications',
  initialState: {
    value: undefined
  },
  reducers: {
    setNotification: (state, action) => {
      state.value = action.payload;
    },
    clearNotification: (state, action) => {
      state.value = undefined;
    }
  }
});

export const { setNotification, clearNotification } = slice.actions;

export const selectNotification = state => state.notifications.value;

export default slice.reducer;