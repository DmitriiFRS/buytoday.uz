import styles from "../../../Components/Prom/Prom.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Grid from "@/Components/Prom/FancoilsGrid";
import { fancoils } from "@/Components/Catalog/Fancoils/Fancoils.data";

export const metadata = {
   title: `Канальные фанкойлы | ${process.env.BRAND}`,
   description: "Канальные фанкойлы по выгодным ценам. Промышленное кондиционирование",
   keywords: ["канальные", "фанкойлы", "промышленное кондиционирование"],
};

const title = "Канальные фанкойлы";
const type = "Канальный";
const uri = "duct-fancoils";

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
