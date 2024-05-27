import { MouseEventHandler } from "react";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";

function FilterBtn({ filtration }: { filtration?: Function }) {
   return (
      <button onClick={filtration as MouseEventHandler<HTMLButtonElement>} className={styles.aircond__aside__accept}>
         Применить
      </button>
   );
}
export default FilterBtn;
