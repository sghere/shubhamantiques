import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: false };

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle } = themeSlice.actions;

export default themeSlice.reducer;
