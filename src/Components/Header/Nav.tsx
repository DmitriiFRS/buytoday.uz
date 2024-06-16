import { nav } from "./Header.data";
import styles from "./Header.module.scss";
import Link from "next/link";
import { FaGripfire } from "react-icons/fa";

function Nav({ isSticky }: { isSticky: boolean }) {
   return (
      <nav className={`${styles.header__nav} ${isSticky ? styles.header__nav__disabled : ""}`}>
         <ul className={styles.header__navlist}>
            {nav.map((el, index) => {
               return (
                  <li className={`${styles.header__navItem} ${index === 0 ? styles.header__navItemActive : ""}`} key={el.id}>
                     {index === 0 && <FaGripfire className={styles.header__navIcon} />}
                     <Link href={el.href} style={{ color: "inherit" }}>
                        {el.title}
                     </Link>
                  </li>
               );
            })}
         </ul>
      </nav>
   );
}
export default Nav;
