import { strapiApi } from "@/service/const";
import axios from "axios";

export async function getProduct({ product }: { product: string }) {
   const filters: any = {};
   if (product) {
      filters.slug = {
         $eq: product,
      };
   }
   try {
      const response = await axios.get(`${strapiApi}/models`, {
         params: {
            filters: filters,
            populate: {
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
                     images: true,
                     previewImage: true,
                     compressorTypeConds: true,
                     brands: true,
                     models: true,
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
