import styles from "../../../Components/Prom/Prom.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Grid from "@/Components/Prom/ChillersGrid";
import { chillers } from "@/Components/Catalog/Chillers/Chillers.data";

export const metadata = {
   title: "Чиллеры, Модульные чиллеры, Винтовые чиллеры | Amazon-Asia",
   description: "Чиллеры для торговых центров, промышленных помещений, супермаркетов и офисов",
   keywords: ["чиллеры", "офисы", "промышленные помещения", "торговый центр", "супермаркет"],
};

const title = "Чиллеры";
const uri = "chillers";

function page() {
   return (
      <div className={styles.prom}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid items={chillers} title={title} uri={uri} />
         </div>
      </div>
   );
}
export default page;
