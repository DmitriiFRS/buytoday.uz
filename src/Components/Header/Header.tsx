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

type ImageType = {
   url: string;
};

type HeaderModel = {
   model: string;
};

type HeaderItemType = {
   name: string;
   url: string;
   company: string;
   imageCollection: {
      items: ImageType[];
   };
   multisplitModelCollection: {
      items: HeaderModel[];
   };
};

export type Data = {
   data: {
      multisplitCollection: {
         items: HeaderItemType[];
      };
      airConditionersCollection: {
         items: HeaderItemType[];
      };
      semiIndustrialCollection: {
         items: HeaderItemType[];
      };
   };
};

function Header() {
   const [sticky, setSticky] = useState<boolean>(false);
   const [isMenuOpen, setMenuOpen] = useState(false);

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

   function openMenu() {
      setMenuOpen(!isMenuOpen);
   }
   return (
      <header className={`${styles.header} ${sticky ? styles.header__sticky : ""}`}>
         <div className={`container ${styles.header__container}`}>
            <div className={styles.header__grid}>
               <div className={styles.header__logo}>
                  <Image src={logo} alt="логотип" width={150} height={50} style={{ objectFit: "contain" }} />
               </div>
               <div className={styles.header__middle}>
                  <Catalog openMenu={openMenu} />
                  <Search />
               </div>
               <Utils />
               <Nav isSticky={sticky} />
            </div>
            {isMenuOpen && <Menu isSticky={sticky} />}
         </div>
      </header>
   );
}
export default Header;
