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
    coolingBtu: string;
    coolingKw: string;
    heatingBtu: string;
    heatingKw: string;
    wifiPrice: number | null;
    powerConsumption: number;
    m2Area: number;
    m3Area: number;
    freon: string;
    innerBlockSize: string;
    outerBlockSize: string;
    airConsumption: number;
    innerBlockNoise: number;
    outerBlockNoise: number;
    innerBlockWeight: number;
    outerBlockWeight: number;
    routeLength: number;
    isInStock: boolean;
    seoTitle: string;
    seoDescription: string;
    bonus: string | null;
    productType: AircondProductType;
    popularParam: PopularParamsType[];
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
        dbValue: string;
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
      };
    };
  };
};

export type AircondProductType = {
  data: {
    id: number;
    attributes: {
      title: string;
      titleSingular: string;
      slug: string;
      locale: string;
    };
  };
};

export type AircondProduct = {
  data: {
    id: number;
    attributes: AircondProductAttributes;
  };
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
