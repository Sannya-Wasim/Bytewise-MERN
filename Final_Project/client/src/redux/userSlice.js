import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: 'User',
    loggedIn: false, // Add a loggedIn state
  },
  reducers: {
    setUser: (state, action) => {
      state.username = action.payload;
      state.loggedIn = true; // Update loggedIn state when user is set
    },
    logout: (state) => {
      state.username = 'User';
      state.loggedIn = false; // Update loggedIn state when user logs out
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
