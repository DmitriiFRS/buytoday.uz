import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
   isWifiActive: boolean;
   modelUrl: null | string;
};

const initialState: InitialStateType = {
   isWifiActive: false,
   modelUrl: null,
};
export const itemSlice = createSlice({
   name: "item",
   initialState,
   reducers: {
      toggleWifiCheckbox: (state, action) => {
         state.isWifiActive = action.payload;
      },
      setUrl: (state, action) => {
         state.modelUrl = action.payload;
      },
   },
});
export const { toggleWifiCheckbox, setUrl } = itemSlice.actions;
export default itemSlice.reducer;
