import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./Slices/ItemCard.slice";
import orderSlice from "./Slices/OrderCart.slice";

export const store = configureStore({
   reducer: {
      itemSlice,
      orderSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
