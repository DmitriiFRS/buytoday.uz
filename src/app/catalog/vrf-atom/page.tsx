import AtomGrid from "@/Components/Prom/AtomGrid";
import styles from "../../../Components/Prom/Prom.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import { atomOuter } from "@/Data/atomOuter.data";
import { atomInner } from "@/Data/atomInner.data";

const title = "VRF ATOM";
const uri = "vrf-atom";

function page() {
   return (
      <div className={styles.prom}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <AtomGrid items1={atomOuter} items2={atomInner} title={title} uri={uri} />
         </div>
      </div>
   );
}
export default page;
