import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./reducers/cartSlice";
import restroDetailSlice from "./reducers/restroDetail";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    restro_detail: restroDetailSlice,
  },
});

export default store;
