import { strapiApi } from "@/service/const";

export async function getPromotions() {
     try {
          const response = await fetch(`${strapiApi}/promotions?populate=image`, {
               method: "GET",
               headers: {
                    "Content-Type": "application/json",
               },
               next: {
                    revalidate: 0,
               },
          });
          if (!response.ok) {
               throw new Error(`Failed to fetch: ${response.statusText}`);
          }
          const data = await response.json();
          return data;
     } catch (err) {
          return {
               error: true,
               msg: err,
          };
     }
}
