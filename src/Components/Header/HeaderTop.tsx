import styles from "./Header.module.scss";
import Link from "next/link";

function HeaderTop() {
   return (
      <div className={styles.header__top}>
         <div className="container">
            <Link className={styles.header__top__num} href={"tel:+998997971407"} target="_blank">
               Для связи: +998 99 797 14 07
            </Link>
         </div>
      </div>
   );
}
export default HeaderTop;
