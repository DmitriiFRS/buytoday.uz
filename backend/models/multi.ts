import { ImageType } from "./commonTypes";

export type MultiInner = {
   name: string;
   url: string;
   type: string;
   image: ImageType[];
   company: string;
   price: number;
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

export type MultiOuter = {
   name: string;
   url: string;
   model: string;
   price: number;
   company: string;
};
