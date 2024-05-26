import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
   wifi: {
      wifiYes: null | boolean;
      wifiNo: null | boolean;
   };
};

const initialState: InitialStateType = {
   wifi: {
      wifiYes: null,
      wifiNo: null,
   },
};

export const aircondFilterSlice = createSlice({
   name: "aircondFilter",
   initialState,
   reducers: {},
});

export const {} = aircondFilterSlice.actions;
export default aircondFilterSlice.reducer;
