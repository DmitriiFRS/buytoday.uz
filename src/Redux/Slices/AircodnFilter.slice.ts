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
   multiOuter: {
      brand: boolean[];
   };
   semi: {
      brand: boolean[];
      power: boolean[];
      type: boolean[];
   };
   fridge: {
      brand: boolean[];
      color: boolean[];
      type: boolean[];
   };
   wash: {
      brand: boolean[];
      drying: boolean[];
      color: boolean[];
   };
   boilers: {
      brand: boolean[];
      performance: boolean[];
   };
   airPurifiers: {
      brand: boolean[];
      type: boolean[];
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
   multiOuter: {
      brand: [false],
   },
   semi: {
      brand: [false, false],
      power: [false, false, false, false, false, false],
      type: [false, false],
   },
   fridge: {
      brand: [false],
      color: [false, false],
      type: [false, false, false, false],
   },
   wash: {
      brand: [false],
      drying: [false, false],
      color: [false, false],
   },
   boilers: {
      brand: [false],
      performance: [false],
   },
   airPurifiers: {
      brand: [false],
      type: [false, false, false],
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
      //Multisplits outer
      brandFilterMultiOuter: (state, action) => {
         state.multiOuter.brand = action.payload;
      },
      //Semi
      brandFilterSemi: (state, action) => {
         state.semi.brand = action.payload;
      },
      powerFilterSemi: (state, action) => {
         state.semi.power = action.payload;
      },
      typeFilterSemi: (state, action) => {
         state.semi.type = action.payload;
      },
      //Fridges
      brandFilterFridge: (state, action) => {
         state.fridge.brand = action.payload;
      },
      colorFilterFridge: (state, action) => {
         state.fridge.color = action.payload;
      },
      typeFilterFridge: (state, action) => {
         state.fridge.type = action.payload;
      },
      //wash
      brandFilterWash: (state, action) => {
         state.wash.brand = action.payload;
      },
      dryingFilterWash: (state, action) => {
         state.wash.drying = action.payload;
      },
      colorFilterWash: (state, action) => {
         state.wash.color = action.payload;
      },
      //boilers
      brandFilterBoilers: (state, action) => {
         state.boilers.brand = action.payload;
      },
      performanceFilterBoilers: (state, action) => {
         state.boilers.performance = action.payload;
      },
      //airPurifiers
      brandFilterAirPurifiers: (state, action) => {
         state.airPurifiers.brand = action.payload;
      },
      typeFilterAirPurifiers: (state, action) => {
         state.airPurifiers.type = action.payload;
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
   brandFilterMultiOuter,
   brandFilterSemi,
   powerFilterSemi,
   typeFilterSemi,
   brandFilterFridge,
   colorFilterFridge,
   typeFilterFridge,
   brandFilterWash,
   dryingFilterWash,
   colorFilterWash,
   brandFilterBoilers,
   performanceFilterBoilers,
   brandFilterAirPurifiers,
   typeFilterAirPurifiers,
} = aircondFilterSlice.actions;
export default aircondFilterSlice.reducer;
