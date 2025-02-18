import { getProductsWithPagination } from "@/fetch/getAllProducts";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import { vrfInner, VRFInnerBody } from "@/Components/Catalog/VrfInner/VrfInner.data";
import { VRFInner, vrfOuter } from "@/Components/Catalog/VrfOuter/VrfOuter.data";
import { chillers } from "@/Components/Catalog/Chillers/Chillers.data";
import { atomInner } from "@/Data/atomInner.data";
import { atomOuter } from "@/Data/atomOuter.data";
export const dynamic = "force-dynamic";
export default async function sitemap() {
     const atoms = [...atomOuter, ...atomInner];
     const data = await getProductsWithPagination();
     return [
          ...data.map((el: AircondProductTypeModel) => {
               return {
                    url: `https://buytoday.uz/catalog/${el.attributes?.productType?.data?.attributes?.slug || "undefined"}/${el.attributes.slug}`,
                    lastModified: new Date(),
               };
          }),
          ...vrfInner.flatMap((el: VRFInnerBody) =>
               el.models.map((model) => ({
                    url: `https://buytoday.uz/catalog/vrf-inner/${el.url?.replace(/\s|\//g, "-").toLowerCase()}_${model.model?.replace(/\s|\//g, "-").toLowerCase()}`,
                    lastModified: new Date(),
               }))
          ),
          ...vrfOuter.flatMap((el: VRFInner) => {
               return el.models.map((model) => ({
                    url: `https://buytoday.uz/catalog/vrf-outer/${el.url?.replace(/\s|\//g, "-").toLowerCase()}_${model.model?.replace(/\s|\//g, "-").toLowerCase()}`,
                    lastModified: new Date(),
               }));
          }),
          ...chillers.flatMap((el) => {
               return el.models.map((model) => ({
                    url: `https://buytoday.uz/catalog/chillers/${el.url?.replace(/\s|\//g, "-").toLowerCase()}_${model.model?.replace(/\s|\//g, "-").toLowerCase()}`,
                    lastModified: new Date(),
               }));
          }),
          ...atoms.flatMap((el) => {
               return el.models.map((model) => ({
                    url: `https://buytoday.uz/catalog/vrf-atom/${el.url?.replace(/\s|\//g, "-").toLowerCase()}_${model.model?.replace(/\s|\//g, "-").toLowerCase()}`,
                    lastModified: new Date(),
               }));
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
               url: "https://buytoday.uz/catalog/chillers",
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
          {
               url: "https://buytoday.uz/catalog/cac",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/lcac",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/wha",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/mda",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/heating-systems",
               lastModified: new Date(),
          },
          {
               url: "https://buytoday.uz/catalog/climate-control",
               lastModified: new Date(),
          },
     ];
}
