import { strapiApi } from "@/service/const";
import axios from "axios";

type GetProductsType = {
   uri: string;
   brand?: string[] | null;
   btus?: string[] | null;
   wifis?: string[] | null;
};

export async function getProducts({ uri, brand, btus, wifis }: GetProductsType) {
   const filters: any = {};

   if (uri) {
      filters.productType = {
         slug: {
            $eq: uri,
         },
      };
   }
   if (brand) {
      filters.product = {
         brands: {
            slug: {
               $in: brand,
            },
         },
      };
   }
   if (btus) {
      filters.btu_filters = {
         value: {
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

   try {
      const response = await axios.get(`${strapiApi}/models`, {
         params: {
            populate: {
               productType: true,
               btu_filters: true,
               wi_fi: true,
               product: {
                  populate: {
                     previewImage: true,
                     brands: true,
                     compressorTypeConds: true,
                  },
               },
            },
            filters: filters,
         },
      });
      if (!response.data) {
         return { error: true, msg: "Данные не найдены", data: null };
      }
      return response.data.data;
   } catch (err) {
      return { error: true, msg: err };
   }
}
