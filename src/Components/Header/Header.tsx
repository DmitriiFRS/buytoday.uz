"use client";

import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../../public/Logos/MideaLogo.png";
import { useEffect, useState } from "react";
import Search from "./Search";
import Catalog from "./Catalog";
import Utils from "./Utils";
import Nav from "./Nav";
import Menu from "./Menu";
import Link from "next/link";
import HeaderTop from "./HeaderTop";

function Header() {
   const [sticky, setSticky] = useState<boolean>(false);
   const [isMenuOpen, setMenuOpen] = useState(false);

   function isSticky() {
      if (window.pageYOffset > 50) {
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
   useEffect(() => {
      isSticky();
   }, []);

   function openMenu() {
      setMenuOpen(!isMenuOpen);
   }
   return (
      <header className={`${styles.header} ${sticky ? styles.header__sticky : ""}`}>
         {!sticky && <HeaderTop />}
         <div className={`container ${styles.header__container}`}>
            <div className={styles.header__grid}>
               <Link href={"/"} className={styles.header__logo}>
                  <Image src={logo} alt="логотип" fill style={{ objectFit: "contain" }} />
               </Link>
               <div className={styles.header__middle}>
                  <Catalog openMenu={openMenu} isMenuOpen={isMenuOpen} />
                  <Search />
               </div>
               <Utils />
               <Nav isSticky={sticky} />
            </div>
            {isMenuOpen && <Menu isSticky={sticky} setMenuOpen={setMenuOpen} />}
         </div>
      </header>
   );
}
export default Header;
