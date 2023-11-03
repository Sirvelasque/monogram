import { configureStore } from "@reduxjs/toolkit";
import itemsSlice from "./redux/shopItem.jsx/itemsSlice";

const store = configureStore({
  reducer: {
    items: itemsSlice,
  },
});

export default store;