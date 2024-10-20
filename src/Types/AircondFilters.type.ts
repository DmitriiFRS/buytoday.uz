export type AircondFilterList = {
   id: number;
   attributes: {
      title: string;
      brands: {
         data: CommonFilterList[];
      };
      compressor_types: {
         data: CommonFilterList[];
      };
      wifis: {
         data: any[];
      };
      btuFilters: {
         data: CommonFilterList[];
      };
      colors: {
         data: CommonFilterList[];
      };
      fridgeTypes: {
         data: CommonFilterList[];
      };
      dries: {
         data: CommonFilterList[];
      };
      performance: {
         data: CommonFilterList[];
      };
      noFrost: {
         data: CommonFilterList[];
      };
      airPurifierTypes: {
         data: CommonFilterList[];
      };
   };
}[];

export type CommonFilterList = {
   id: number;
   attributes: {
      title: string;
      slug: string;
   };
};
