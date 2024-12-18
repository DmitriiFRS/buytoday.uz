import { strapiApi } from "@/service/const";
import axios from "axios";

type GetProductsType = {
   uri: string;
   brand?: string[] | null;
   btus?: string[] | null;
   wifis?: string[] | null;
   compressorTypes?: string[] | null;
   isDry?: string[] | null;
   boilerPerformance?: string[] | null;
   fridgeTypes?: string[] | null;
   colorsTypes?: string[] | null;
   noFrosts?: string[] | null;
   airPurifiersTypes?: string[] | null;
   page: number | null;
   limit: number;
};

export async function getProducts({
   uri,
   brand,
   btus,
   wifis,
   compressorTypes,
   isDry,
   boilerPerformance,
   fridgeTypes,
   colorsTypes,
   noFrosts,
   airPurifiersTypes,
   limit = 9999,
   page = 1,
}: GetProductsType) {
   const filters: any = {};

   if (uri) {
      filters.productType = {
         slug: {
            $eq: uri,
         },
      };
   }
   if (brand) {
      filters.$or = [
         {
            product: {
               brands: {
                  slug: {
                     $in: brand,
                  },
               },
            },
         },
         {
            paramsWrapper: {
               brands: {
                  slug: {
                     $in: brand,
                  },
               },
            },
         },
      ];
   }
   if (btus) {
      filters.btu_filters = {
         slug: {
            $in: btus,
         },
      };
   }
   if (wifis) {
      filters.wi_fi = {
         slug: {
            $in: wifis,
         },
      };
   }
   if (compressorTypes) {
      filters.compressorType = {
         slug: {
            $in: compressorTypes,
         },
      };
   }
   if (isDry) {
      filters.dry = {
         slug: {
            $in: isDry,
         },
      };
   }
   if (boilerPerformance) {
      filters.performance = {
         slug: {
            $in: boilerPerformance,
         },
      };
   }
   if (fridgeTypes) {
      filters.fridgeType = {
         slug: {
            $in: fridgeTypes,
         },
      };
   }
   if (colorsTypes) {
      filters.colors = {
         slug: {
            $in: colorsTypes,
         },
      };
   }
   if (noFrosts) {
      filters.noFrost = {
         slug: {
            $in: noFrosts,
         },
      };
   }
   if (airPurifiersTypes) {
      filters.airPurifiersType = {
         slug: {
            $in: airPurifiersTypes,
         },
      };
   }

   try {
      const response = await axios.get(`${strapiApi}/models`, {
         params: {
            populate: {
               productType: true,
               btu_filters: true,
               wi_fi: true,
               compressorType: true,
               popularParam: true,
               paramsWrapper: {
                  populate: {
                     previewImage: true,
                     images: true,
                     brands: true,
                  },
               },
               product: {
                  populate: {
                     previewImage: true,
                     brands: true,
                     compressorTypeConds: true,
                  },
               },
            },
            filters: filters,
            pagination: {
               page: page,
               pageSize: limit,
            },
         },
      });
      if (!response.data) {
         return { error: true, msg: "Данные не найдены", data: null };
      }
      return response.data;
   } catch (err) {
      return { error: true, msg: err };
   }
}
