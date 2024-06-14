import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { ReactNode } from "react";

function MainParams({ children, description }: { children: ReactNode; description: string }) {
   return (
      <div className={styles.item__mainParams}>
         <h4 className={`${styles.item__mainParams__title} ${styles.item__h4title}`}>Основные характеристики</h4>
         <ul className={styles.item__mainParams__list}>{children}</ul>
         <p className={styles.item__description}>{description}</p>
      </div>
   );
}
export default MainParams;
