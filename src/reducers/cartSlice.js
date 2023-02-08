import { createSlice } from "@reduxjs/toolkit";

// const intialState = [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // value: 0,
    item: ["grapes"],
  },
  reducers: {
    // increment: (state) => {
    //   state.value++;
    // },

    addItem: (state, action) => {
      state.item.push(action.payload);
    },
  },
});

// console.log(CartSlice, "slice");

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
