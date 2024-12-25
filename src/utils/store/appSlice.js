import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: false,
    isHeaderOpen: true,
  },
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    toggleHeader : (state) =>{
      state.isHeaderOpen = !state.isHeaderOpen;
    }
  },
});

export const { toggleMenu, toggleHeader } = appSlice.actions;
export default appSlice.reducer;
