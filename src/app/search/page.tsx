import Search from "@/Components/Search/Search";
import ErrorFetchData from "@/Components/Utilities/ErrorFetchData";
import Loader from "@/Components/Utilities/Loader";
import { fetchExpressApi } from "@/Functions/fetchExpressApi";
import fetchGraphql from "@/Functions/fetchGraphql";
import { DollarData } from "@/Types/Common.type";
import { ReadonlyURLSearchParams } from "next/navigation";
import { Suspense } from "react";

async function page({ searchParams }: { searchParams: ReadonlyURLSearchParams }) {
   const urlParams = new URLSearchParams(searchParams);
   const data = await fetchExpressApi(
      `${urlParams.size > 0 ? `${process.env.BACKEND_URL}/api/allItems?${urlParams}` : `${process.env.BACKEND_URL}/api/allItems`}`
   );
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
         <Search data={data.paginatedItems} dollarValue={currencyData.data.dollarValue.value} pagination={data.pagination} urlParams={urlParams} />
      </Suspense>
   );
}
export default page;
