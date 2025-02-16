import Search from "@/Components/Search/Search";
import ErrorFetchData from "@/Components/Utilities/ErrorFetchData";
import Loader from "@/Components/Utilities/Loader";
import { getCurrencyValue } from "@/fetch/getCurrencyValue";
import { CurrencyType } from "@/Types/CurrencyType";
import { Suspense } from "react";

async function page() {
     const currencyVal: CurrencyType = await getCurrencyValue();
     return !currencyVal ? <ErrorFetchData /> : <Suspense fallback={<Loader />}>{currencyVal.attributes && <Search dollarValue={currencyVal.attributes.value} />}</Suspense>;
}
export default page;
