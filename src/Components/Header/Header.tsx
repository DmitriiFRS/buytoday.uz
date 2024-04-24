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
            <div className={styles.header__logo}>
               <Image src={logo} alt="Логотип" fill />
            </div>
            <nav className={styles.header__nav}>
               <ul className={styles.header__navlist}>
                  {nav.map((el) => {
                     return (
                        <li key={el.id}>
                           <Link href={el.href}>{el.title}</Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>
            <div className={styles.header__bottom}>
               <div className={styles.header__catalog}>
                  <button>Каталог</button>
               </div>
               <div className={styles.header__search}>
                  <div className={styles.header__searchBody}>
                     <input type="text" />
                     <FaSearch />
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
}
export default Header;
