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
     const pathNames = paths.split("/").filter((path) => {
          if (path === "description" || path === "reviews") {
               return;
          }
          return path !== "filter" && path;
     });
     return (
          <div>
               <ul className={styles.breadcrumbs}>
                    <li className={listClasses}>
                         <Link href={"/"}>{homeElement}</Link>
                    </li>
                    {pathNames.length > 0 && separator}
                    {pathNames.map((link, index) => {
                         let href = `/${pathNames.slice(0, index + 1).join("/")}`;
                         let itemClasses = paths === href ? `${styles.breadcrumbs__list}` : styles.breadcrumbs__list;
                         let itemLink = capitalizeLinks ? link[0].toUpperCase() + link.slice(1, link.length) : link;
                         switch (itemLink) {
                              case "catalog":
                                   itemLink = "Каталог";
                                   break;
                              case "lcac":
                                   itemLink = "Полупромышленное кондиционирование";
                                   break;
                              case "cac":
                                   itemLink = "Промышленное оборудование";
                                   break;
                              case "mda":
                                   itemLink = "Крупная бытовая техника";
                                   break;
                              case "wha":
                                   itemLink = "Малая бытовая техника";
                                   break;
                              case "heating-systems":
                                   itemLink = "Система отопления";
                                   break;
                              case "climate-control":
                                   itemLink = "Система контроля климата";
                                   break;
                              case "coolers":
                                   itemLink = "Кулеры";
                                   break;
                              case "dehumids":
                                   itemLink = "Осушители";
                                   break;
                              case "recuperators":
                                   itemLink = "Рекуператоры";
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
                              case "vrf-outer":
                                   itemLink = "VRF наружные блоки";
                                   break;
                              case "vrf-inner":
                                   itemLink = "VRF внутренние блоки";
                                   break;
                              case "chillers":
                                   itemLink = "Чиллеры";
                                   break;
                              case "multisplit":
                                   itemLink = "Мульти-сплит системы";
                                   break;
                              case "vrf-atom":
                                   itemLink = "VRF ATOM";
                                   break;
                              case "multisplit-inner":
                                   itemLink = "Мульти-сплит внутр. блоки";
                                   break;
                              case "multisplit-outer":
                                   itemLink = "Мульти-сплит наружные блоки";
                                   break;
                              case "semi-industrial":
                                   itemLink = "Полупромышленные сплит-системы";
                                   break;
                              case "vrf":
                                   itemLink = "VRF-системы";
                                   break;
                              case "fancoils":
                                   itemLink = "Фанкойлы";
                                   break;
                              case "delivery":
                                   itemLink = "Доставка";
                                   break;
                              case "fridges":
                                   itemLink = "Холодильники";
                                   break;
                              case "wash":
                                   itemLink = "Стиральные машины";
                                   break;
                              case "boilers":
                                   itemLink = "Газовые котлы";
                                   break;
                              case "air-purifiers":
                                   itemLink = "Увлажнители-очистители";
                                   break;
                              case "wishlist":
                                   itemLink = "Избранное";
                                   break;
                              case "promotions":
                                   itemLink = "Акции и скидки";
                                   break;
                              case "free-install":
                                   itemLink = "Бесплатная установка";
                                   break;
                              case "apple-june":
                                   itemLink = "Акция в июне";
                                   break;
                              case "service":
                                   itemLink = "Сервис";
                                   break;
                              case "service":
                                   itemLink = "Сервис";
                                   break;
                              case "description":
                                   itemLink = "";
                                   break;
                         }
                         return (
                              <React.Fragment key={index}>
                                   <li className={`${itemClasses} ${pathNames.length - 1 === index ? styles.breadcrumbs__active : ""}`}>
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
