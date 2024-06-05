import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
   userData: {
      name: null | string;
      phone: null | string;
      email: null | string;
   };
   itemsCount: null | number;
};

const initialState: InitialStateType = {
   userData: {
      name: null,
      phone: null,
      email: null,
   },
   itemsCount: null,
};

export const orderSlice = createSlice({
   name: "item",
   initialState,
   reducers: {
      setItemsCount: (state, action) => {
         state.itemsCount = action.payload;
      },
   },
});

export const { setItemsCount } = orderSlice.actions;
export default orderSlice.reducer;
