import { createSlice } from '@reduxjs/toolkit';

let authToken = localStorage.getItem('authToken');
let user = localStorage.getItem('user');

export const slice = createSlice({
  name: 'user',
  initialState: {
    value: user ? JSON.parse(user) : undefined,
    loggedIn: authToken ? true : false,
    authToken: authToken
  },
  reducers: {
    logOut: (state) => {
      state.value = undefined;
      state.loggedIn = false;
      state.authToken = undefined;
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
    },
    logInSync: (state, action) => {
      state.value = action.payload.value;
      state.authToken = action.payload.authToken;
      state.loggedIn = true;
      localStorage.setItem('authToken', action.payload.authToken);
      localStorage.setItem('user', JSON.stringify(action.payload.value));
    }
  }
});

export const { logOut, logInSync } = slice.actions;

export const logInAsync = userDetail => dispatch => {
  // make a call to the backend and then save the data based on the information received
  dispatch(logInSync({value: userDetail, authToken: 'asdf'}));
};

export const selectUser = state => state.user.value;
export const selectToken = state => state.user.authToken;

export default slice.reducer;