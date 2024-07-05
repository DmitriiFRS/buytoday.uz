import Search from "@/Components/Search/Search";
import ErrorFetchData from "@/Components/Utilities/ErrorFetchData";
import Loader from "@/Components/Utilities/Loader";
import { fetchExpressApi } from "@/Functions/fetchExpressApi";
import { Suspense } from "react";

async function page() {
   const data = await fetchExpressApi(`${process.env.BACKEND_URL}/api/allItems`);
   return !data ? (
      <ErrorFetchData />
   ) : (
      <Suspense fallback={<Loader />}>
         <Search data={data} />
      </Suspense>
   );
}
export default page;
