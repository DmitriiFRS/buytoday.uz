import { vrfInner } from "@/Components/Catalog/VrfInner/VrfInner.data";
import styles from "../../../Components/Prom/Prom.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import InnerVRFGrid from "@/Components/Prom/InnerVRFGrid";

export const metadata = {
   title: "Внутренние блоки VRF систем | Amazon-Asia",
   description: "Канальные, кассетные, настенные блоки VRF системы",
   keywords: ["vrf внутренние блоки", "vrf фанкойлы", "vrf кассетные блоки", "vrf настенные блоки"],
};

const title = "VRF Внутренние блоки";
const uri = "vrf-inner";

function page() {
   return (
      <div className={styles.prom}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <InnerVRFGrid items={vrfInner} title={title} uri={uri} />
         </div>
      </div>
   );
}
export default page;
