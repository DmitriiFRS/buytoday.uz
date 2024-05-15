import { vrfOuter } from "@/Components/Catalog/VrfOuter/VrfOuter.data";
import Main from "@/Components/Prom/VrfOuterItem/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";

function page({ params }: { params: { item: string } }) {
   return (
      <div>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main outerItems={vrfOuter} params={params} />
         </div>
      </div>
   );
}
export default page;
