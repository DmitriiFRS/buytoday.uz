import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
   wifi: boolean[];
   brand: boolean[];
   power: boolean[];
};

const initialState: InitialStateType = {
   wifi: [false, false],
   brand: [false, false],
   power: [false, false, false, false, false],
};

export const aircondFilterSlice = createSlice({
   name: "aircondFilter",
   initialState,
   reducers: {
      brandFilter: (state, action) => {
         state.brand = action.payload;
      },
      wifiFilter: (state, action) => {
         state.wifi = action.payload;
      },
      powerFilter: (state, action) => {
         state.power = action.payload;
      },
   },
});

export const { brandFilter, wifiFilter, powerFilter } = aircondFilterSlice.actions;
export default aircondFilterSlice.reducer;
