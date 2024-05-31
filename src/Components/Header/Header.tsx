"use client";

import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "../../../public/Logos/MideaLogo.png";
import { nav } from "./Header.data";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { useEffect, useState } from "react";
import Search from "./Search";
import Catalog from "./Catalog";
import Utils from "./Utils";
import Nav from "./Nav";

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
   useEffect(() => {
      isSticky();
   }, []);
   return (
      <header className={`${styles.header} ${sticky ? styles.header__sticky : ""}`}>
         <div className="container">
            <div className={styles.header__grid}>
               <div className={styles.header__logo}>
                  <Image src={logo} alt="логотип" width={150} height={50} style={{ objectFit: "contain" }} />
               </div>
               <div className={styles.header__middle}>
                  <Catalog />
                  <Search />
               </div>
               <Utils />
               <Nav isSticky={sticky} />
            </div>
         </div>
      </header>
   );
}
export default Header;
