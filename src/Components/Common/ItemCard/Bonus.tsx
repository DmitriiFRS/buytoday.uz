import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { BsStars } from "react-icons/bs";

function Bonus({ bonus }: { bonus: string }) {
   return (
      bonus && (
         <div className={styles.bonus}>
            <BsStars size={15} />
            <span>{bonus}</span>
         </div>
      )
   );
}
export default Bonus;
