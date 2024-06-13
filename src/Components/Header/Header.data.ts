import wmsplit from "../../../public/Icons/SideCatalog/aircond-icon.png";
import semiind from "../../../public/Icons/SideCatalog/semi-ind-icon.png";
import multi from "../../../public/Icons/SideCatalog/multisplit-icon.png";
import vrf from "../../../public/Icons/SideCatalog/vrf-icon.png";
import wash from "../../../public/Icons/SideCatalog/washIcon.png";
import boiler from "../../../public/Icons/SideCatalog/boiler-icon.png";
import purif from "../../../public/Icons/SideCatalog/airPur-icon.png";
import col from "../../../public/Icons/SideCatalog/col-icon.png";
import duct from "../../../public/Icons/SideCatalog/duct-icon.png";
import multiOuter from "../../../public/Icons/SideCatalog/multiOuter-icon.png";
import multiInner from "../../../public/Icons/SideCatalog/multisplit-icon.png";
import chiller from "../../../public/Icons/SideCatalog/chiller-icon.png";
import fancoil from "../../../public/Icons/SideCatalog/fancoil-icon.png";
import fridge from "../../../public/Icons/SideCatalog/fridge-icon.png";

export const nav = [
   {
      id: 0,
      title: "Настенные кондиционеры",
      href: "/",
   },
   {
      id: 1,
      title: "Внешние блоки VRF",
      href: "/",
   },
   {
      id: 2,
      title: "Чиллеры",
      href: "/",
   },
   {
      id: 3,
      title: "Колонные сплит-системы",
      href: "/",
   },
   {
      id: 4,
      title: "Кассетные сплит-системы",
      href: "/",
   },
   {
      id: 5,
      title: "Все категории",
      href: "/catalog",
   },
];

export const sidemenu = [
   {
      id: 0,
      icon: wmsplit,
      title: "Настенные сплит-системы",
      content: {
         title: "Настенные сплит-системы",
         body: [
            {
               title: "Все настенные сплит-системы",
               href: "catalog/air-conditioners",
               icon: wmsplit,
            },
         ],
      },
   },
   {
      id: 1,
      icon: semiind,
      title: "Полупромышленные сплит-системы",
      content: {
         title: "Полупромышленные сплит-системы",
         body: [
            {
               title: "Колонные сплит-системы",
               href: "catalog/col-conditioners",
               icon: col,
            },
            {
               title: "Канальные сплит-системы",
               href: "catalog/duct-conditioners",
               icon: duct,
            },
            {
               title: "Кассетные сплит-системы",
               href: "catalog/cassette-conditioners",
               icon: semiind,
            },
         ],
      },
   },
   {
      id: 2,
      icon: multi,
      title: "Мультисплит-системы",
      content: {
         title: "Мультисплит-системы",
         body: [
            {
               title: "Внутренние блоки",
               href: "catalog/multisplit-inner",
               icon: multiInner,
            },
            {
               title: "Наружные блоки",
               href: "catalog/multisplit-outer",
               icon: multiOuter,
            },
         ],
      },
   },
   {
      id: 3,
      icon: vrf,
      title: "Промышленное оборудование",
      content: {
         title: "Промышленное оборудование",
         body: [
            {
               title: "VRF системы",
               href: "catalog/vrf",
               icon: vrf,
            },
            {
               title: "Чиллеры",
               href: "catalog/chillers",
               icon: chiller,
            },
            {
               title: "Фанкойлы",
               href: "catalog/fancoils",
               icon: fancoil,
            },
         ],
      },
   },
   {
      id: 4,
      icon: wash,
      title: "Бытовая техника",
      content: {
         title: "Бытовая техника",
         body: [
            {
               title: "Стиральные машины",
               href: "catalog/wash",
               icon: wash,
            },
            {
               title: "Холодильники",
               href: "catalog/fridges",
               icon: fridge,
            },
         ],
      },
   },
   {
      id: 5,
      icon: boiler,
      title: "Газовые котлы",
      content: {
         title: "Газовые котлы",
         body: [
            {
               title: "Все газовые котлы",
               href: "catalog/boilers",
               icon: boiler,
            },
         ],
      },
   },
   {
      id: 6,
      icon: purif,
      title: "Очистители и увлажнители воздуха",
      content: {
         title: "Очистители и увлажнители воздуха",
         body: [
            {
               title: "Все очистители и увлажнители воздуха",
               href: "catalog/air-purifiers",
               icon: purif,
            },
         ],
      },
   },
];
