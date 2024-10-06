import { strapiApi } from "@/service/const";
import axios from "axios";

export async function getCurrencyValue() {
   try {
      const response = await axios.get(`${strapiApi}/dollar-value`, {});
      if (!response.data) {
         return { error: true, msg: "Данные не найдены", data: null };
      }
      return response.data.data;
   } catch (err) {
      return { error: true, msg: err };
   }
}
