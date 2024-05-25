import OuterGrid from "@/Components/Multisplit/OuterGrid";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import { multi } from "@/Data/multisplits.data";
import styles from "@/Components/Aircond&SemiInd/AircondSemi.module.scss";

const title = "Наружные блоки мульти-сплит системы";
const uri = "multisplit-outer";

function page() {
   return (
      <div className={styles.aircond}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <OuterGrid items={multi} />
         </div>
      </div>
   );
}
export default page;
