import { strapiApi } from "@/service/const";
import axios from "axios";

export async function getPopulars() {
   try {
      const response = await axios.get(`${strapiApi}/popular-good`, {
         params: {
            populate: {
               productModels: {
                  populate: {
                     product: {
                        populate: {
                           previewImage: true,
                           brands: true,
                        },
                     },
                     productType: true,
                     popularParam: true,
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
