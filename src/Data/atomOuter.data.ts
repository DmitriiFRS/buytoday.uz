import { StaticImageData } from "next/image";
import atomb from "../../public/Img/Catalog/VrfOuter/atomVrfB.png";

export type Atom = AtomInner[];

export type AtomInner = {
     name: string;
     url: string;
     imges: StaticImageData[];
     description: string;
     company: string;
     connect: string;
     connectableIndoor?: string;
     compressor?: string;
     compressorQuantity?: string;
     fanType: string;
     fanQuantity: string;
     freonType: string;
     models: AtomModel[];
};

export type AtomModel = {
     model: string;
     coolingPower: string;
     eer: string;
     heatingPower: string;
     cop: string;
     maxInnerBlocks: string;
     airFlow: string;
     noiseLevel: string;
     size: string;
     weight: string;
     pipeConnect: string;
};

export const atomOuter: Atom = [
     {
          name: "Mini VRF ATOM B",
          url: "atom-b",
          imges: [atomb],
          description: "Компактная VRF система серии ATOM",
          company: "Midea",
          connect: "220-240/1/ 50(60)",
          connectableIndoor: "45~130% от мощности наружного блока",
          compressor: "DC inverter",
          compressorQuantity: "1",
          fanType: "DC motor",
          fanQuantity: "1",
          freonType: "R410A",
          models: [
               {
                    model: "MDV-V12WDHN1(AtB)",
                    coolingPower: "3.5",
                    eer: "3.71",
                    heatingPower: "3.8",
                    cop: "4.43",
                    maxInnerBlocks: "3",
                    airFlow: "2500",
                    noiseLevel: "53",
                    size: "795x555x365",
                    weight: "35",
                    pipeConnect: "Ф6.35/Ф12.7",
               },
               {
                    model: "MDV-V18WDHN1(AtB)",
                    coolingPower: "5.3",
                    eer: "3.6",
                    heatingPower: "5.8",
                    cop: "4.3",
                    maxInnerBlocks: "3",
                    airFlow: "2700",
                    noiseLevel: "54",
                    size: "795x555x365",
                    weight: "35",
                    pipeConnect: "Ф6.35/Ф12.7",
               },
               {
                    model: "MDV-V21WDHN1(AtB)",
                    coolingPower: "6.2",
                    eer: "3.35",
                    heatingPower: "6",
                    cop: "4.25",
                    maxInnerBlocks: "3",
                    airFlow: "2700",
                    noiseLevel: "55",
                    size: "795x555x365",
                    weight: "35",
                    pipeConnect: "Ф9.53/Ф15.9",
               },
               {
                    model: "MDV-V28WDHN1(AtB)",
                    coolingPower: "8",
                    eer: "3.81",
                    heatingPower: "9",
                    cop: "4.41",
                    maxInnerBlocks: "4",
                    airFlow: "3750",
                    noiseLevel: "54",
                    size: "910×712×426",
                    weight: "49",
                    pipeConnect: "Ф9.53/Ф15.9",
               },
               {
                    model: "MDV-V36WDHN1(AtB)",
                    coolingPower: "10",
                    eer: "3.76",
                    heatingPower: "12",
                    cop: "3.81",
                    maxInnerBlocks: "6",
                    airFlow: "5200",
                    noiseLevel: "54",
                    size: "950×840×440",
                    weight: "59.5",
                    pipeConnect: "Ф9.53/Ф15.9",
               },
               {
                    model: "MDV-V42WDHN1(AtB)",
                    coolingPower: "12",
                    eer: "3.63",
                    heatingPower: "14",
                    cop: "3.85",
                    maxInnerBlocks: "7",
                    airFlow: "5000",
                    noiseLevel: "56",
                    size: "950×840×440",
                    weight: "63",
                    pipeConnect: "Ф9.53/Ф15.9",
               },
               {
                    model: "MDV-V48WDHN1(AtB)",
                    coolingPower: "14",
                    eer: "3.53",
                    heatingPower: "16",
                    cop: "4.02",
                    maxInnerBlocks: "8",
                    airFlow: "5200",
                    noiseLevel: "56",
                    size: "950×840×440",
                    weight: "75",
                    pipeConnect: "Ф9.53/Ф15.9",
               },
               {
                    model: "MDV-V56WDHN1(AtB)",
                    coolingPower: "15.5",
                    eer: "3.18",
                    heatingPower: "18",
                    cop: "3.73",
                    maxInnerBlocks: "9",
                    airFlow: "5000",
                    noiseLevel: "56",
                    size: "950×840×440",
                    weight: "77.5",
                    pipeConnect: "Ф9.53/Ф19.1",
               },
               {
                    model: "MDV-V60WDHN1(AtB)",
                    coolingPower: "17.5",
                    eer: "2.86",
                    heatingPower: "19.5",
                    cop: "3.5",
                    maxInnerBlocks: "9",
                    airFlow: "5300",
                    noiseLevel: "57",
                    size: "1040×865×523",
                    weight: "90.5",
                    pipeConnect: "Ф9.53/Ф19.1",
               },
          ],
     },
];
