import styles from "../../../Components/Prom/Prom.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Grid from "@/Components/Prom/FancoilsGrid";
import { fancoils } from "@/Components/Catalog/Fancoils/Fancoils.data";

const title = "Настенные фанкойлы";
const type = "Настенный";
const uri = "wall-mounted-fancoils";

function page() {
   return (
      <div className={styles.prom}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid items={fancoils} title={title} type={type} uri={uri} />
         </div>
      </div>
   );
}
export default page;
