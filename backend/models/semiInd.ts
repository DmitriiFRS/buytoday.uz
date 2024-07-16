import { ImageType } from "./commonTypes";

export interface SemiInd {
   name: string;
   url: string;
   semiCondModel: SemiCondModel[];
   image: ImageType[];
   company: string;
   type: string;
   price: number;
   isInverter: boolean;
   coolingPowerBtu: string;
}

export interface SemiCondModel {
   fields: {
      coolingPowerBtu: string;
   };
}
