import styles from "./Header.module.scss";
import Link from "next/link";

function HeaderTop() {
   return (
      <div className={styles.header__top}>
         <div className="container">
            <Link className={styles.header__top__num} href={"/"} target="_blank">
               Для связи: +99871 209 99 44
            </Link>
         </div>
      </div>
   );
}
export default HeaderTop;
