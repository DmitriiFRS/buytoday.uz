import { createSlice } from "@reduxjs/toolkit";

type InitialStateType = {
   aircond: {
      wifi: boolean[];
      brand: boolean[];
      power: boolean[];
   };
   multi: {
      brand: boolean[];
      power: boolean[];
      type: boolean[];
   };
   semi: {
      brand: boolean[];
   };
};

const initialState: InitialStateType = {
   aircond: {
      wifi: [false, false],
      brand: [false, false],
      power: [false, false, false, false, false],
   },
   multi: {
      brand: [false, false],
      power: [false, false, false, false, false],
      type: [false, false, false],
   },
   semi: {
      brand: [false, false],
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
      brandFilterMulti: (state, action) => {
         state.multi.brand = action.payload;
      },
      powerFilterMulti: (state, action) => {
         state.multi.power = action.payload;
      },
      typeFilterMulti: (state, action) => {
         state.multi.type = action.payload;
      },
      brandFilterSemi: (state, action) => {
         state.semi.brand = action.payload;
      },
   },
});

export const { brandFilter, wifiFilter, powerFilter, brandFilterMulti, powerFilterMulti, typeFilterMulti, brandFilterSemi } = aircondFilterSlice.actions;
export default aircondFilterSlice.reducer;
