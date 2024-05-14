import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
   isWifiActive: boolean;
   modelUrl: null | string;
   isHidden: boolean;
};

const initialState: InitialStateType = {
   isWifiActive: false,
   modelUrl: null,
   isHidden: true,
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
      setHidden: (state, action) => {
         state.isHidden = action.payload;
      },
   },
});
export const { toggleWifiCheckbox, setUrl, setHidden } = itemSlice.actions;
export default itemSlice.reducer;
