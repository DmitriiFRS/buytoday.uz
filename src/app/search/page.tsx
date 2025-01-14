import Search from "@/Components/Search/Search";
import ErrorFetchData from "@/Components/Utilities/ErrorFetchData";
import Loader from "@/Components/Utilities/Loader";
import { getCurrencyValue } from "@/fetch/getCurrencyValue";
import { fetchExpressApi } from "@/Functions/fetchExpressApi";
import fetchGraphql from "@/Functions/fetchGraphql";
import { DollarData } from "@/Types/Common.type";
import { CurrencyType } from "@/Types/CurrencyType";
import { ReadonlyURLSearchParams } from "next/navigation";
import { Suspense } from "react";

async function page() {
     const currencyVal: CurrencyType = await getCurrencyValue();
     return !currencyVal ? <ErrorFetchData /> : <Suspense fallback={<Loader />}>{currencyVal && <Search dollarValue={currencyVal.attributes.value} />}</Suspense>;
}
export default page;
