"use client";

import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../../public/Logos/MideaLogo.png";
import { nav } from "./Header.data";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";

function Header() {
   const [sticky, setSticky] = useState<boolean>(false);
   function isSticky() {
      if (window.pageYOffset > 110) {
         setSticky(true);
      } else {
         setSticky(false);
      }
   }
   useEffect(() => {
      window.addEventListener("scroll", isSticky);
      return () => {
         window.removeEventListener("scroll", isSticky);
      };
   }, []);
   return (
      <header className={`${styles.header} ${sticky ? styles.header__sticky : ""}`}>
         <div className={styles.header__container}>
            <Link href={"/"} className={styles.header__logo}>
               <Image src={logo} alt="Логотип" fill />
            </Link>
            <nav className={styles.header__nav}>
               <ul className={`${styles.header__navlist} ${sticky ? styles.header__navlist__sticky : ""}`}>
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
