import { vrfOuter } from "@/Components/Catalog/VrfOuter/VrfOuter.data";
import styles from "../../../Components/Prom/Prom.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import OuterVRFGrid from "@/Components/Prom/OuterVRFGrid";

const title = "VRF Внешние блоки";
const uri = "vrf-outer";

function page() {
   return (
      <div className={styles.fancoils}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <OuterVRFGrid items={vrfOuter} title={title} uri={uri} />
         </div>
      </div>
   );
}
export default page;
