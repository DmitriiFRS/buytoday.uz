"use client";

import { usePathname, useRouter } from "next/navigation";
import styles from "../../../Aircond&SemiInd/Params.module.scss";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { MouseEvent } from "react";

function Tabs({ path, tabsArray }: { path?: string; tabsArray: { id: number; title: string; url: string }[] }) {
   const tabsRef = useRef<HTMLDivElement>(null!);
   const [isTabsDrag, setTabsDrag] = useState(false);
   const pathname = usePathname();
   const router = useRouter();

   const handlePage = useCallback(
      (urlParam: string) => {
         router.push(urlParam);
      },
      [router]
   );

   useEffect(() => {
      const isMobile = window.innerWidth < 768;
      const scrollTop = isMobile ? 1200 : 750;
      if (path) {
         window.scrollTo({
            top: scrollTop,
            behavior: "smooth",
         });
      }
   }, [router, path]);
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
         {tabsArray.map((el) => {
            return (
               <button key={el.id} onClick={() => handlePage(el.url)} className={`${styles.tabs__tab} ${pathname === el.url ? styles.tabs__tab__active : ""}`}>
                  {el.title}
               </button>
            );
         })}
      </div>
   );
}
export default Tabs;
