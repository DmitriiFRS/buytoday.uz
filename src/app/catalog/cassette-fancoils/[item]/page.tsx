import { fancoils } from "@/Components/Catalog/Fancoils/Fancoils.data";
import Main from "@/Components/Prom/Item/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";

function page({ params }: { params: { item: string } }) {
   return (
      <div>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main outerItems={fancoils} params={params} />
         </div>
      </div>
   );
}
export default page;
