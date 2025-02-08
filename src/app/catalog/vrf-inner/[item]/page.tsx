import { vrfInner } from "@/Components/Catalog/VrfInner/VrfInner.data";
import Main from "@/Components/Prom/VrfInnerItem/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Prom/Prom.module.scss";

function page({ params }: { params: { item: string } }) {
     return (
          <div className={styles.prom}>
               <div className="container">
                    <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
                    <Main outerItems={vrfInner} params={params} category="vrf-inner" />
               </div>
          </div>
     );
}
export default page;
