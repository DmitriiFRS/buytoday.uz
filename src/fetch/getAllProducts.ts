import page from "@/app/page";
import { strapiApi } from "@/service/const";
import axios from "axios";

export async function getAllProducts(page: number, pageSize: number = 100) {
     try {
          const response = await axios.get(`${strapiApi}/models`, {
               params: {
                    pagination: {
                         pageSize: 100,
                         page: page,
                    },
                    populate: {
                         productType: true,
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

export async function getProductsWithPagination() {
     let allProducts: any = [];
     let currentPage = 1;
     let totalPages = 1;

     try {
          const response = await getAllProducts(currentPage);
          if (response.error) {
               console.error("Ошибка при получении данных:", response.msg);
               return { error: true, msg: response.msg, data: null };
          }
          if (response.meta && response.meta.pagination) {
               totalPages = response.meta.pagination.pageCount;
          } else {
               console.warn("Ответ от API не содержит информации о пагинации.");
          }
          if (response.data) {
               allProducts = allProducts.concat(response.data);
          }
          while (currentPage < totalPages) {
               currentPage++;
               const response = await getAllProducts(currentPage);
               if (response.error) {
                    console.error("Ошибка при получении данных:", response.msg);
                    return { error: true, msg: response.msg, data: null };
               }
               if (response.data) {
                    allProducts = allProducts.concat(response.data);
               }
          }
          return allProducts;
     } catch (err) {
          return { error: true, msg: err };
     }
}
