import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
   isWifiActive: boolean;
};

const initialState = {
   isWifiActive: false,
};
export const itemSlice = createSlice({
   name: "item",
   initialState,
   reducers: {
      toggleWifiCheckbox: (state, action) => {
         state.isWifiActive = action.payload;
      },
   },
});
export const {} = itemSlice.actions;
export default itemSlice.reducer;
