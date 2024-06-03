import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
   userData: {
      name: null | string;
      phone: null | string;
      email: null | string;
   };
};

const initialState: InitialStateType = {
   userData: {
      name: null,
      phone: null,
      email: null,
   },
};

export const orderSlice = createSlice({
   name: "item",
   initialState,
   reducers: {},
});

export const {} = orderSlice.actions;
export default orderSlice.reducer;
