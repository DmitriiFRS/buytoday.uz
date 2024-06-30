import { ImageType } from "./commonTypes";

export type MultiInner = {
   name: string;
   url: string;
   type: string;
   image: ImageType[];
   company: string;
   multisplitModel: MultiSplitModel[];
};

export type MultiSplitModel = {
   fields: {
      filterBtu: string;
      coolingPowerKW: string;
   };
};

export type MultiSplitModel2 = {
   filterBtu: string;
   coolingPowerKW: string;
};

export type MultiOuter = {};
