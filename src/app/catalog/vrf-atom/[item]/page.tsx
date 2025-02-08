import { atomInner } from "@/Data/atomInner.data";
import { atomOuter } from "@/Data/atomOuter.data";
import Main from "@/Components/Prom/VrfInnerItem/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Prom/Prom.module.scss";

function page({ params }: { params: { item: string } }) {
     const concatedItems = [...atomOuter, ...atomInner];
     return (
          <div className={styles.prom}>
               <div className="container">
                    <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
                    <Main outerItems={concatedItems as any} params={params} category="vrf-atom" />
               </div>
          </div>
     );
}
export default page;
