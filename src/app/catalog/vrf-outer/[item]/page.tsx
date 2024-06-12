import { vrfOuter } from "@/Components/Catalog/VrfOuter/VrfOuter.data";
import Main from "@/Components/Prom/VrfOuterItem/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Prom/Prom.module.scss";

function page({ params }: { params: { item: string } }) {
   return (
      <div className={styles.prom}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main outerItems={vrfOuter} params={params} />
         </div>
      </div>
   );
}
export default page;
