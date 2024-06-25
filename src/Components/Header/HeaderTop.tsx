import styles from "./Header.module.scss";
import Link from "next/link";

function HeaderTop() {
   return (
      <div className={styles.header__top}>
         <div className="container">
            <Link className={styles.header__top__num} href={"tel:+998909708949"} target="_blank">
               Для связи: +99890 970 89 49
            </Link>
         </div>
      </div>
   );
}
export default HeaderTop;
