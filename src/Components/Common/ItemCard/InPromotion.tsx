import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { FaGripfire } from "react-icons/fa";

function InPromotion({ inPromotion }: { inPromotion: boolean }) {
   return (
      inPromotion && (
         <div className={styles.inPromotion}>
            <FaGripfire color="#f34d00" size={18} />
            <span>Участвует в акции</span>
         </div>
      )
   );
}
export default InPromotion;
