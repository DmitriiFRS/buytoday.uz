import { strapiApi } from "@/service/const";
import axios from "axios";

export async function getFilters({ uri }: { uri: string }) {
   const filters: any = {};
   if (uri) {
      filters.slug = {
         $eq: uri,
      };
   }

   try {
      const response = await axios.get(`${strapiApi}/product-types`, {
         params: {
            filters: filters,
            populate: {
               brands: true,
               compressor_types: true,
               btuFilters: true,
               wifis: true,
            },
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
