import styles from "../../../Components/Prom/Prom.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";

const title = "VRF ATOM";
const uri = "atom";

function page() {
   return (
      <div className={styles.fancoils}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
         </div>
      </div>
   );
}
export default page;
