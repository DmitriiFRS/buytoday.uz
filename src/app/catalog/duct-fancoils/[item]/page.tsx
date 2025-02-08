import { fancoils } from "@/Components/Catalog/Fancoils/Fancoils.data";
import Main from "@/Components/Prom/VrfInnerItem/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Prom/Prom.module.scss";

function page({ params }: { params: { item: string } }) {
     return (
          <div className={styles.prom}>
               <div className="container">
                    <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
                    <Main outerItems={fancoils as any} params={params} category="duct-fancoils" />
               </div>
          </div>
     );
}
export default page;
