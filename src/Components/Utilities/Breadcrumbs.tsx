"use client";

import React, { ReactNode } from "react";
import styles from "./Utilities.module.scss";
import { usePathname } from "next/navigation";
import Link from "next/link";

type TBreadCrumbProps = {
   homeElement: ReactNode;
   separator: ReactNode;
   containerClasses?: string;
   listClasses?: string;
   activeClasses?: string;
   capitalizeLinks?: boolean;
};

const NextBreadcrumb = ({ homeElement, separator, containerClasses, listClasses, activeClasses, capitalizeLinks }: TBreadCrumbProps) => {
   const paths = usePathname();
   const pathNames = paths.split("/").filter((path) => path);

   return (
      <div>
         <ul className={styles.breadcrumbs}>
            <li className={listClasses}>
               <Link href={"/"}>{homeElement}</Link>
            </li>
            {pathNames.length > 0 && separator}
            {pathNames.map((link, index) => {
               let href = `/${pathNames.slice(0, index + 1).join("/")}`;
               let itemClasses = paths === href ? `${styles.breadcrumbs__list} ${styles.breadcrumbs__active}` : styles.breadcrumbs__list;
               let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;
               switch (itemLink) {
                  case "catalog":
                     itemLink = "Каталог";
                     break;
                  case "air-conditioners":
                     itemLink = "Настенные сплит-системы";
                     break;
                  case "col-conditioners":
                     itemLink = "Колонные сплит-системы";
                     break;
                  case "duct-conditioners":
                     itemLink = "Канальные сплит-системы";
                     break;
                  case "cassette-conditioners":
                     itemLink = "Кассетные сплит-системы";
                     break;
                  case "cassette-fancoils":
                     itemLink = "Кассетные фанкойлы";
                     break;
                  case "duct-fancoils":
                     itemLink = "Канальные фанкойлы";
                     break;
                  case "wall-mounted-fancoils":
                     itemLink = "Настенные фанкойлы";
                     break;
                  case "floor-to-ceiling-fancoils":
                     itemLink = "Напольно-потолочные фанкойлы";
                     break;
               }
               return (
                  <React.Fragment key={index}>
                     <li className={itemClasses}>
                        <Link href={href}>{itemLink}</Link>
                     </li>
                     {pathNames.length !== index + 1 && separator}
                  </React.Fragment>
               );
            })}
         </ul>
      </div>
   );
};

export default NextBreadcrumb;
