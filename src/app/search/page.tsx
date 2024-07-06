import Search from "@/Components/Search/Search";
import ErrorFetchData from "@/Components/Utilities/ErrorFetchData";
import Loader from "@/Components/Utilities/Loader";
import { fetchExpressApi } from "@/Functions/fetchExpressApi";
import fetchGraphql from "@/Functions/fetchGraphql";
import { DollarData } from "@/Types/Common.type";
import { Suspense } from "react";

async function page() {
   const data = await fetchExpressApi(`${process.env.BACKEND_URL}/api/allItems`);
   const currencyData: DollarData = await fetchGraphql(`
      query {
         dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
            value
      }
         }
   `);
   return !data ? (
      <ErrorFetchData />
   ) : (
      <Suspense fallback={<Loader />}>
         <Search data={data} dollarValue={currencyData.data.dollarValue.value} />
      </Suspense>
   );
}
export default page;
