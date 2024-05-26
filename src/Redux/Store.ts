import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./Slices/ItemCard.slice";
import aircondFilterSlice from "./Slices/AircodnFilter.slice";

export const store = configureStore({
   reducer: {
      itemSlice,
      aircondFilterSlice,
   },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
