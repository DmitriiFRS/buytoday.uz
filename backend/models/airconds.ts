import { ImageType } from "./commonTypes";

export type Airconds = {
   airCondModel: AircondModel[];
   company: string;
   compressor: string;
   image: ImageType[];
   isInverter: boolean;
   name: string;
   temperatureRange: string;
   url: string;
   filterBtu: string;
   wifiPrice: number | null;
   coolingPowerBtu: string;
};

export type AircondModel = {
   fields: {
      filterBtu: string;
      coolingPowerBtu: string;
      wifiPrice: number | null;
   };
} & Airconds;

export type AircondOuterInner = {
   airCondModel: AircondModel[];
   fields: {
      filterBtu: string;
      coolingPowerBtu: string;
      wifiPrice: number | null;
      company: string;
      compressor: string;
      image: ImageType[];
      isInverter: boolean;
      name: string;
      temperatureRange: string;
      url: string;
   };
};
