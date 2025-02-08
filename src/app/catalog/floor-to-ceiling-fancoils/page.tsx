import styles from "../../../Components/Prom/Prom.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Grid from "@/Components/Prom/FancoilsGrid";
import { fancoils } from "@/Components/Catalog/Fancoils/Fancoils.data";

export const metadata = {
     title: `Напольно-потолочные фанкойлы | Каталог Midea & Welkin | Buytoday`,
     description: "Напольно-потолочные фанкойлы по выгодным ценам. Промышленное кондиционирование",
     keywords: ["напольно-потолочные", "фанкойлы", "промышленное кондиционирование"],
};

const title = "Напольно-потолочные фанкойлы";
const type = "Напольный";
const uri = "floor-to-ceiling-fancoils";

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
