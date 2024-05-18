import styles from "../../../Components/Prom/Prom.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Grid from "@/Components/Prom/ChillersGrid";
import { chillers } from "@/Components/Catalog/Chillers/Chillers.data";

const title = "Чиллеры";
const uri = "chillers";

function page() {
   return (
      <div className={styles.fancoils}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid items={chillers} title={title} uri={uri} />
         </div>
      </div>
   );
}
export default page;
