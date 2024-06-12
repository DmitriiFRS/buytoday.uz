import { chillers } from "@/Components/Catalog/Chillers/Chillers.data";
import Main from "@/Components/Prom/Chillers/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Prom/Prom.module.scss";

function page({ params }: { params: { item: string } }) {
   return (
      <div className={styles.prom}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main outerItems={chillers} params={params} />
         </div>
      </div>
   );
}
export default page;
