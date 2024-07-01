import styles from "../../../Aircond&SemiInd/Params.module.scss";
import { FaWifi } from "react-icons/fa";

function WifiIncludes() {
   return (
      <div className={styles.wifi}>
         <FaWifi className={styles.wifi__icon} />
         <div className={`${styles.wifi__title} ${styles.wifi__titleIncludes}`}>
            Со встроенной функцией <span>Wi-fi</span>
         </div>
      </div>
   );
}
export default WifiIncludes;
