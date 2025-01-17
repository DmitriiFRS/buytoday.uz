import styles from "./Header.module.scss";
import Link from "next/link";

function HeaderTop() {
     return (
          <div className={styles.header__top}>
               <div className="container">
                    <Link className={styles.header__top__num} href={"tel:+998771343660"} target="_blank">
                         Для связи: +998 77 134 36 60
                    </Link>
                    <span className={styles.header__top__num}> , </span>
                    <Link className={styles.header__top__num} href={"tel:+998771393660"} target="_blank">
                         +998 77 139 36 60
                    </Link>
               </div>
          </div>
     );
}
export default HeaderTop;
