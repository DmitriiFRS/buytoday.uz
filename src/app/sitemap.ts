import { getProductsWithPagination } from "@/fetch/getAllProducts";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";

export default async function sitemap() {
     const data = await getProductsWithPagination();
     return [
          ...data.map((el: AircondProductTypeModel) => {
               return {
                    url: `https://buytoday.uz/catalog/${el.attributes?.productType?.data?.attributes?.slug || "undefined"}/${el.attributes.slug}`,
                    lastModified: new Date(),
               };
          }),
          {
               url: "https://buytoday.uz",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/delivery",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/service",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/air-conditioners",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/multisplit",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/semi-industrial",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/vrf",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/chillers",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/fancoils",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/fridges",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/wash",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/boilers",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/air-purifiers",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/heat-curtains",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/dehumids",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/recups",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/coolers",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/multisplit-outer",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/multisplit-inner",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/col-conditioners",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/cassette-conditioners",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/duct-conditioners",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/vrf-outer",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/vrf-inner",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/vrf-atom",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/wall-mounted-fancoils",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/cassette-fancoils",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/duct-fancoils",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/floor-to-ceiling-fancoils",
               lastModified: new Date(),
          },
     ];
}
