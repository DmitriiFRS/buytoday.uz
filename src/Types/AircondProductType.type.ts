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
      coolingBtu: number;
      coolingKw: number;
      heatingBtu: number;
      heatingKw: number;
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
      product: AircondProduct;
      popularParam: PopularParamsType[];
   };
};

export type AircondProductType = {
   data: {
      id: number;
      attributes: {
         title: string;
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
