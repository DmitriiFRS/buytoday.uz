import { StaticImageData } from "next/image";
import outer from "../../public/Img/Catalog/multisplits/multiOuter.png";

export type MultiOuter = MultiOuterBody[];

export type MultiOuterBody = {
   name: string;
   url: string;
   img: StaticImageData;
   price: number;
   params: {
      brand: string;
      isInverter: boolean;
      connect: string;
      coolingPower: string;
      heatingPower: string;
      heatingEnergyConsumption: string;
      EER: string;
      COP: string;
      aream2: string;
      maxInnerBlocks: string;
      temperatureCooling: string;
      temperatureHeating: string;
      size: string;
      weight: string;
   };
};

export const multi: MultiOuter = [
   {
      name: "Наружный блок мульти-сплит системы Midea M2OH-14HFN8-Q1",
      url: "M2OH-14HFN8-Q1",
      img: outer,
      price: 450,
      params: {
         brand: "Midea",
         isInverter: true,
         connect: "1~, 220-240 В, 50 Гц",
         coolingPower: "4,8~4,1~1,4",
         heatingPower: "6,9~6,6~1,4",
         heatingEnergyConsumption: "1,71~1,19~0,27",
         EER: "3.2",
         COP: "3.71",
         aream2: "40",
         maxInnerBlocks: "2",
         temperatureCooling: "-15~50",
         temperatureHeating: "-15~24",
         size: "800x333x554",
         weight: "31,8",
      },
   },
   {
      name: "Наружный блок мульти-сплит системы Midea M2OE-18HFN8-Q1",
      url: "M2OE-18HFN8-Q1",
      img: outer,
      price: 450,
      params: {
         brand: "Midea",
         isInverter: true,
         connect: "1~, 220-240 В, 50 Гц",
         coolingPower: "4,8~4,1~1,4",
         heatingPower: "6,9~6,6~1,4",
         heatingEnergyConsumption: "1,71~1,19~0,27",
         EER: "3.24",
         COP: "4.01",
         aream2: "50",
         maxInnerBlocks: "2",
         temperatureCooling: "-15~50",
         temperatureHeating: "-15~24",
         size: "800x333x554",
         weight: "35.5",
      },
   },
   {
      name: "Наружный блок мульти-сплит системы Midea M3OG-21HFN8-Q1",
      url: "M3OG-21HFN8-Q1",
      img: outer,
      price: 450,
      params: {
         brand: "Midea",
         isInverter: true,
         connect: "1~, 220-240 В, 50 Гц",
         coolingPower: "6,59~6,2~1,99",
         heatingPower: "6,51~6,5~1,99",
         heatingEnergyConsumption: "1,8~1,74~0,35",
         EER: "3.23",
         COP: "3.71",
         aream2: "60",
         maxInnerBlocks: "3",
         temperatureCooling: "-15~50",
         temperatureHeating: "-15~24",
         size: "890x342x673",
         weight: "43.3",
      },
   },
   {
      name: "Наружный блок мульти-сплит системы Midea M3OA-27HFN8-Q1",
      url: "M3OA-27HFN8-Q1",
      img: outer,
      price: 450,
      params: {
         brand: "Midea",
         isInverter: true,
         connect: "1~, 220-240 В, 50 Гц",
         coolingPower: "8,5~7,9~2,9",
         heatingPower: "8,5~8,2~2",
         heatingEnergyConsumption: "2,89~2,1~0,31",
         EER: "3.23",
         COP: "3,91",
         aream2: "80",
         maxInnerBlocks: "3",
         temperatureCooling: "-15~50",
         temperatureHeating: "-15~24",
         size: "845x363x702",
         weight: "51.1",
      },
   },
   {
      name: "Наружный блок мульти-сплит системы Midea M4OE-28HFN8-Q",
      url: "M4OE-28HFN8-Q",
      img: outer,
      price: 450,
      params: {
         brand: "Midea",
         isInverter: true,
         connect: "1~, 220-240 В, 50 Гц",
         coolingPower: "9,8~8,2~2,1",
         heatingPower: "10,6~8,8~2,3",
         heatingEnergyConsumption: "3,05~2,05~0,43",
         EER: "3.23",
         COP: "4",
         aream2: "85",
         maxInnerBlocks: "4",
         temperatureCooling: "-15~50",
         temperatureHeating: "-15~24",
         size: "946x410x810",
         weight: "62.1",
      },
   },
   {
      name: "Наружный блок мульти-сплит системы Midea M5OE-42HFN8-Q",
      url: "M5OE-42HFN8-Q",
      img: outer,
      price: 450,
      params: {
         brand: "Midea",
         isInverter: true,
         connect: "1~, 220-240 В, 50 Гц",
         coolingPower: "12,3~12,3~2,98",
         heatingPower: "12,31~12,3~2,75",
         heatingEnergyConsumption: "4~3,1~0,51",
         EER: "2.85",
         COP: "3.97",
         aream2: "120",
         maxInnerBlocks: "5",
         temperatureCooling: "-15~50",
         temperatureHeating: "-15~24",
         size: "946x410x810",
         weight: "73.3",
      },
   },
   {
      name: "Наружный блок мульти-сплит системы Midea M4OB-36HFN8-Q",
      url: "M4OB-36HFN8-Q",
      img: outer,
      price: 450,
      params: {
         brand: "Midea",
         isInverter: true,
         connect: "1~, 220-240 В, 50 Гц",
         coolingPower: "10,6~10,6~2,1",
         heatingPower: "11,1~10,6~2,3",
         heatingEnergyConsumption: "4,21~2,76~0,47",
         EER: "3.2",
         COP: "3.93",
         aream2: "100",
         maxInnerBlocks: "4",
         temperatureCooling: "-15~50",
         temperatureHeating: "-15~24",
         size: "946x410x810",
         weight: "68.8",
      },
   },
];
