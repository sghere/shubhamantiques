import { createSlice } from '@reduxjs/toolkit';

const initialState = { Theme: false, LoginForm: false };

export const togglerSlice = createSlice({
  name: 'toggler',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.Theme = !state.Theme;
    },
    toggleLoginForm: (state) => {
      state.LoginForm = !state.LoginForm;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleTheme, toggleLoginForm } = togglerSlice.actions;

export default togglerSlice.reducer;
