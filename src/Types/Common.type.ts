export type DollarData = {
   data: {
      dollarValue: {
         value: number;
      };
   };
};
export type FilterFields = {
   title: string;
   titleVal: string;
   list: string[];
   filterVal: string[];
   id: string[];
};

export type ImageRest = {
   fields: {
      file: {
         url: string;
      };
   };
};
