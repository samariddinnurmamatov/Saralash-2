import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/cartSlice";
import favoriteReducer from "../slice/favoriteSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorite: favoriteReducer,
  },
});

export default store;
