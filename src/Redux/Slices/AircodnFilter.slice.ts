import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
   aircond: {
      wifi: boolean[];
      brand: boolean[];
      power: boolean[];
   };
};

const initialState: InitialStateType = {
   aircond: {
      wifi: [false, false],
      brand: [false, false],
      power: [false, false, false, false, false],
   },
};

export const aircondFilterSlice = createSlice({
   name: "aircondFilter",
   initialState,
   reducers: {
      brandFilter: (state, action) => {
         state.aircond.brand = action.payload;
      },
      wifiFilter: (state, action) => {
         state.aircond.wifi = action.payload;
      },
      powerFilter: (state, action) => {
         state.aircond.power = action.payload;
      },
   },
});

export const { brandFilter, wifiFilter, powerFilter } = aircondFilterSlice.actions;
export default aircondFilterSlice.reducer;
