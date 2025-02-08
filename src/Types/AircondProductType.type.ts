import { StrapiArrayImageType, StrapiImageType } from "./Common.type";

export type AircondProductTypeList = AircondProductTypeModel[];

export type AircondProductTypeModel = {
     id: number;
     attributes: {
          name: string;
          locale: string;
          slug: string;
          price: number;
          filterBtu: number;
          isPromoted: boolean;
          wifiPrice: number | null;
          isInStock: boolean;
          seoTitle: string;
          seoDescription: string;
          bonus: string | null;
          productType: AircondProductType;
          popularParam: PopularParamsType[];
          product: {
               data: {
                    attributes: {
                         models: {
                              data: AircondProductTypeModel[];
                         };
                    };
               };
          };
          dry: {
               data: dryType;
          };
          performance: {
               data: PerformanceType;
          };
          paramsWrapper: {
               id: number;
               noise: number;
               sizes: string;
               mainDescription: string;
               additionalDescription: string;
               videoRef: string;
               previewImage: StrapiImageType;
               aircond: AircondProduct;
               images: {
                    data: StrapiArrayImageType[];
               };
               brands: {
                    data: {
                         attributes: {
                              slug: string;
                              title: string;
                         };
                    };
               };
               multiOuter: {
                    id: number;
                    powerSupply: string;
                    coolingAmperage: string;
                    err: string;
                    heatingAmperage: string;
                    cop: string;
               };
               fridges: {
                    id: number;
                    valueL: string;
                    freezerCapacity: string;
                    coldRoomValue: string;
                    noise: string;
               };
               wash: {
                    drying: string;
                    programNums: string;
                    rpm: string;
                    capacity: string;
               };
               airPurifiers: {
                    voltage: string;
                    nominalFrequency: string;
                    nominalPower: string;
                    anions: string;
                    ParticleRemovalVol: string;
                    filterReplacementPeriod: string;
                    tankCapacity: string;
                    maximumSprayVolume: string;
                    cableLength: string;
                    oscillationDegree: string;
                    engineSpeed: string;
                    airVelocity: string;
                    formaldehydeVol: string;
                    noise?: string;
                    weight?: string;
               };
               boilers: {
                    performanceMin: string;
                    heatingSource: string;
                    gasWorkingPressure: string;
                    kpd: string;
                    heatingTemperatureRange: string;
                    hotWaterTemperatureRange: string;
                    workingPressure: string;
                    expansionTankVolume: string;
                    water25LitersMin: string;
                    water30LitersMin: string;
                    maxminGasPressure: string;
                    oxygenSupply: string;
                    gasFlowRateMaxMin: string;
                    CombustionChamberType: string;
                    nominalPower?: string;
                    maxPerformance?: string;
                    size?: string;
               };
               coolers: {
                    coilMaterial?: string;
                    hotWaterTemp?: string;
                    chilledWaterTemp?: string;
                    hotWaterSize?: string;
                    chilledWaterSize?: string;
                    thermalCap?: string;
                    cooling?: string;
                    size?: string;
               };
          };
     };
};

export type AircondProductType = {
     data: {
          attributes: {
               title: string;
               titleSingular: string;
               slug: string;
               locale: string;
               product: AircondProduct;
          };
     };
};

export type AircondProduct = {
     product: {
          data: {
               id: number;
               attributes: AircondProductAttributes;
          };
     };
     heatingBtu?: string;
     heatingKw?: string;
     coolingBtu?: string;
     coolingKw?: string;
     m2Area?: string;
     m3Area?: string;
     powerConsumption?: string;
     airComsumption?: string;
     innerBlockNoise?: string;
     outerBlockNoise?: string;
     innerBlockWeight?: string;
     outerBlockWeight?: string;
     freon?: string;
     innerBlockSize?: string;
     outerBlockSize?: string;
     routeLength?: string;
     pipes?: string;
     externalPanel?: string;
     serving?: string;
     recirculation?: string;
     fullSize?: string;
     powerSupply?: string;
     tempOutput?: string;
     sizeCurtains?: string;
};

export type AircondProductAttributes = {
     name: string;
     slug: string;
     locale: string;
     mainDescription: string;
     additionalDescription: string;
     videoRef: string;
     previewImage: StrapiImageType;
     temperatureRange: string;
     images: {
          data: StrapiArrayImageType[];
     };
     brands: {
          data: {
               attributes: {
                    slug: string;
                    title: string;
               };
          };
     };
     compressorTypeConds: {
          data: {
               attributes: {
                    slug: string;
                    title: string;
               };
          };
     };
     models: {
          data: AircondProductTypeModel[];
     };
};
export type PopularParamsType = {
     name: string;
     value: string;
};

export type dryType = {
     id: number;
     attributes: {
          title: string;
          slug: string;
     };
};

export type PerformanceType = {
     id: number;
     attributes: {
          title: string;
          slug: string;
     };
};
