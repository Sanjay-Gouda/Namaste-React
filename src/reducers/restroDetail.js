import { createSlice } from "@reduxjs/toolkit";

const restroDetailSlice = createSlice({
  name: "restro_detail",
  initialState: {
    currentRestro: {},
  },
  reducers: {
    setCurrentRestroName: (state, action) => {
      state.currentRestro = action.payload;
    },
  },
});

export const { setCurrentRestroName } = restroDetailSlice.actions;

export default restroDetailSlice.reducer;
