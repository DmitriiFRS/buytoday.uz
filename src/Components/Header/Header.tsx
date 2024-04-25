import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../../public/Logos/MideaLogo.png";
import { nav } from "./Header.data";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

function Header() {
   return (
      <header className={styles.header}>
         <div className={styles.header__container}>
            <Link href={"/"} className={styles.header__logo}>
               <Image src={logo} alt="Логотип" fill />
            </Link>
            <nav className={styles.header__nav}>
               <ul className={styles.header__navlist}>
                  {nav.map((el) => {
                     return (
                        <li className={styles.header__navItem} key={el.id}>
                           <Link href={el.href}>{el.title}</Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>
            <div className={styles.header__bottom}>
               <button className={styles.header__catalog}>
                  <span>Каталог</span>
               </button>
               <div className={styles.header__search}>
                  <div className={styles.header__searchBody}>
                     <input type="text" placeholder="Поиск товаров" />
                     <FaSearch className={styles.header__icon} />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}
export default Header;
