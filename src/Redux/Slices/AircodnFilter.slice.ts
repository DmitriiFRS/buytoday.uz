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
   fridge: {
      brand: boolean[];
      color: boolean[];
   };
   wash: {
      brand: boolean[];
   };
   boilers: {
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
   fridge: {
      brand: [false],
      color: [false, false],
   },
   wash: {
      brand: [false],
   },
   boilers: {
      brand: [false],
   },
};

export const aircondFilterSlice = createSlice({
   name: "aircondFilter",
   initialState,
   reducers: {
      // Airconds
      brandFilter: (state, action) => {
         state.aircond.brand = action.payload;
      },
      wifiFilter: (state, action) => {
         state.aircond.wifi = action.payload;
      },
      powerFilter: (state, action) => {
         state.aircond.power = action.payload;
      },
      //Multisplits
      brandFilterMulti: (state, action) => {
         state.multi.brand = action.payload;
      },
      powerFilterMulti: (state, action) => {
         state.multi.power = action.payload;
      },
      typeFilterMulti: (state, action) => {
         state.multi.type = action.payload;
      },
      //Semi
      brandFilterSemi: (state, action) => {
         state.semi.brand = action.payload;
      },
      //Fridges
      brandFilterFridge: (state, action) => {
         state.fridge.brand = action.payload;
      },
      colorFilterFridge: (state, action) => {
         state.fridge.color = action.payload;
      },
      //wash
      brandFilterWash: (state, action) => {
         state.wash.brand = action.payload;
      },
      //boilers
      brandFilterBoilers: (state, action) => {
         state.boilers.brand = action.payload;
      },
   },
});

export const {
   brandFilter,
   wifiFilter,
   powerFilter,
   brandFilterMulti,
   powerFilterMulti,
   typeFilterMulti,
   brandFilterSemi,
   brandFilterFridge,
   colorFilterFridge,
   brandFilterWash,
   brandFilterBoilers,
} = aircondFilterSlice.actions;
export default aircondFilterSlice.reducer;
