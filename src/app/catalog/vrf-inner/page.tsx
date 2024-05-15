import { vrfInner } from "@/Components/Catalog/VrfInner/VrfInner.data";
import styles from "../../../Components/Prom/Prom.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import InnerVRFGrid from "@/Components/Prom/InnerVRFGrid";

const title = "VRF Внутренние блоки";
const uri = "vrf-inner";

function page() {
   return (
      <div className={styles.fancoils}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <InnerVRFGrid items={vrfInner} title={title} uri={uri} />
         </div>
      </div>
   );
}
export default page;
