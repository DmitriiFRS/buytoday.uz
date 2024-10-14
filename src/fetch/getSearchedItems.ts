import { strapiApi } from "@/service/const";
import axios from "axios";

export async function getSearchedItems({ value }: { value: string }) {
   const filters: any = {};

   if (value) {
      filters.$or = [
         {
            slug: {
               $contains: value,
            },
         },
         {
            name: {
               $contains: value,
            },
         },
      ];
   }
   try {
      const response = await axios.get(`${strapiApi}/models`, {
         params: {
            filters: filters,
            populate: {
               productType: true,
               product: {
                  populate: {
                     previewImage: true,
                     brands: true,
                  },
               },
               paramsWrapper: {
                  populate: {
                     previewImage: true,
                     brands: true,
                  },
               },
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
