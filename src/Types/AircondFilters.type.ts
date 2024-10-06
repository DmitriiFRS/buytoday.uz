export type AircondFilterList = {
   id: number;
   attributes: {
      title: string;
      brands: {
         data: BrandsData[];
      };
      compressor_types: {
         data: CompressorTypesData[];
      };
      wifis: {
         data: any[];
      };
      filterBtu: FilterBtuData[];
   };
}[];

export type BrandsData = {
   id: number;
   attributes: {
      title: string;
      slug: string;
   };
};

export type CompressorTypesData = {
   id: number;
   attributes: {
      title: string;
      slug: string;
   };
};

export type FilterBtuData = {
   id: number;
   title: string;
   value: string;
};

export type CommonFilterList = {
   id: number;
   attributes: {
      title: string;
      slug: string;
   };
};
