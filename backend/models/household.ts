import { ImageType } from "./commonTypes";

export type FridgesType = {
   company: string;
   type: string;
   price: number;
   image: ImageType[];
   color: string;
   filterType: string;
};

export type WashesType = {
   company: string;
   isDrying: boolean;
   price: number;
   image: ImageType[];
   color: string;
   filterColor: string;
};

export type BoilersType = {
   company: string;
   price: number;
   image: ImageType[];
   performanceFilter: string;
};

export type AirPurifiersType = {
   company: string;
   price: number;
   image: ImageType[];
   filterType: string;
};
