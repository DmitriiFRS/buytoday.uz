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
                         productType: true,
                         dry: true,
                         performance: true,
                         product: {
                              populate: {
                                   models: true,
                              },
                         },
                         paramsWrapper: {
                              populate: {
                                   previewImage: true,
                                   images: true,
                                   brands: true,
                                   fridges: true,
                                   wash: true,
                                   airPurifiers: true,
                                   boilers: true,
                                   multiOuter: true,
                                   coolers: true,
                                   recups: true,
                                   dehumids: true,
                                   aircond: {
                                        populate: {
                                             product: {
                                                  populate: {
                                                       previewImage: true,
                                                       images: true,
                                                       compressorTypeConds: true,
                                                  },
                                             },
                                        },
                                   },
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
