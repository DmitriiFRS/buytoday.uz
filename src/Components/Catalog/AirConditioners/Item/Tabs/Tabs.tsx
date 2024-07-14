"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "../../../../Aircond&SemiInd/Params.module.scss";
import React, { useEffect, useRef, useState } from "react";
import { MouseEvent } from "react";

function Tabs({ url, path }: { url: string; path?: string }) {
   const tabsRef = useRef<HTMLDivElement>(null!);
   const [isTabsDrag, setTabsDrag] = useState(false);
   useEffect(() => {
      const isMobile = window.innerWidth < 768;
      const scrollTop = isMobile ? 1200 : 750;
      if (path) {
         window.scrollTo({
            top: scrollTop,
            behavior: "smooth",
         });
      }
   }, []);
   const pathname = usePathname();
   const router = useRouter();
   const handlePage = (urlParam: string) => {
      router.push(urlParam);
   };
   function drag(e: MouseEvent<HTMLDivElement>) {
      if (isTabsDrag) {
         tabsRef.current.scrollLeft -= e.movementX;
      }
   }
   useEffect(() => {
      const handleWindowMouseUp = () => {
         if (isTabsDrag) {
            setTabsDrag(false);
            window.removeEventListener("mouseup", handleWindowMouseUp);
         }
      };

      window.addEventListener("mouseup", handleWindowMouseUp);

      return () => window.removeEventListener("mouseup", handleWindowMouseUp);
   }, [isTabsDrag]);
   return (
      <div
         ref={tabsRef}
         onMouseMove={(e) => drag(e)}
         onMouseDown={() => {
            setTabsDrag(true);
         }}
         onMouseUp={() => {
            setTabsDrag(false);
         }}
         className={styles.tabs}
      >
         <button onClick={() => handlePage(url)} className={`${styles.tabs__tab} ${pathname === url ? styles.tabs__tab__active : ""}`}>
            Характеристики
         </button>
         <button
            onClick={() => handlePage(url + "/description")}
            className={`${styles.tabs__tab} ${pathname === url + "/description" ? styles.tabs__tab__active : ""}`}
         >
            Описание
         </button>
         <button
            onClick={() => handlePage(url + "/reviews")}
            className={`${styles.tabs__tab} ${pathname === url + "/reviews" ? styles.tabs__tab__active : ""}`}
         >
            Обзоры
         </button>
      </div>
   );
}
export default Tabs;
