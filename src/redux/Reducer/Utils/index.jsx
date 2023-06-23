import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  snackbar: {
    isOpen: false,
    type: '',
    message: '',
  },
  isSideNavOpen: false,
};

let utilsSlice = createSlice({
  name: 'utils',
  initialState: initialState,
  reducers: {
    toggleSnackBar: function (state, action) {
      state.snackbar = action.payload;
    },
    toggleSideNav: function (state, action) {
      state.isSideNavOpen = action.payload;
    },
  },
});
export const { toggleSnackBar, toggleSideNav } = utilsSlice.actions;
export default utilsSlice.reducer;
