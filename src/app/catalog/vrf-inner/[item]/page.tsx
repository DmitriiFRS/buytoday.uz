import { vrfInner } from "@/Components/Catalog/VrfInner/VrfInner.data";
import Main from "@/Components/Prom/VrfInnerItem/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";

function page({ params }: { params: { item: string } }) {
   return (
      <div>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main outerItems={vrfInner} params={params} />
         </div>
      </div>
   );
}
export default page;
