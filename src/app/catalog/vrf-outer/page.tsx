import { vrfOuter } from "@/Components/Catalog/VrfOuter/VrfOuter.data";
import styles from "../../../Components/Prom/Prom.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import OuterVRFGrid from "@/Components/Prom/OuterVRFGrid";

export const metadata = {
   title: "VRF Внешние блоки, VRF V8 | Amazon-Asia",
   description: "Наружные блоки VRF системы для промышленного охлаждения и обогрева больших помещений",
   keywords: ["vrf наружные блоки", "vrf v8"],
};

const title = "VRF Внешние блоки";
const uri = "vrf-outer";

function page() {
   return (
      <div className={styles.prom}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <OuterVRFGrid items={vrfOuter} title={title} uri={uri} />
         </div>
      </div>
   );
}
export default page;
