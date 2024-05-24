import { atomInner } from "@/Data/atomInner.data";
import { atomOuter } from "@/Data/atomOuter.data";
import Main from "@/Components/Prom/Atom/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";

function page({ params }: { params: { item: string } }) {
   return (
      <div>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main outerAtom={atomOuter} innerAtom={atomInner} params={params} />
         </div>
      </div>
   );
}
export default page;
