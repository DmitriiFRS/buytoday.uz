import wmsplit from "../../../public/Icons/SideCatalog/aircond-icon.png";
import semiind from "../../../public/Icons/SideCatalog/semi-ind-icon.png";
import multi from "../../../public/Icons/SideCatalog/multisplit-icon.png";
import vrf from "../../../public/Icons/SideCatalog/vrf-icon.png";
import chiller from "../../../public/Icons/SideCatalog/chiller-icon.png";
import fancoil from "../../../public/Icons/SideCatalog/fancoil-icon.png";

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
            },
            {
               title: "Канальные сплит-системы",
               href: "catalog/duct-conditioners",
            },
            {
               title: "Кассетные сплит-системы",
               href: "catalog/cassette-conditioners",
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
            },
            {
               title: "Наружные блоки",
               href: "catalog/multisplit-outer",
            },
         ],
      },
   },
   {
      id: 3,
      icon: vrf,
      title: "VRF системы",
      content: {
         title: "VRF системы",
         body: [
            {
               title: "Наружные блоки",
               href: "catalog/vrf-outer",
            },
            {
               title: "Внутренние блоки",
               href: "catalog/vrf-inner",
            },
            {
               title: "Аксессуары для VRF",
               href: "catalog/vrf-accessories",
            },
            {
               title: "АТОМ VRF",
               href: "catalog/vrf-atom",
            },
         ],
      },
   },
   {
      id: 4,
      icon: chiller,
      title: "Чиллеры",
      content: {
         title: "Чиллеры",
         body: [
            {
               title: "Все чиллеры",
               href: "catalog/chillers",
            },
         ],
      },
   },
   {
      id: 5,
      icon: fancoil,
      title: "Фанкойлы",
      content: {
         title: "Фанкойлы",
         body: [
            {
               title: "Настенные фанкойлы",
               href: "catalog/wall-mounted-fancoils",
            },
            {
               title: "Кассетные фанкойлы",
               href: "catalog/cassette-fancoils",
            },
            {
               title: "Канальные фанкойлы",
               href: "catalog/duct-fancoils",
            },
            {
               title: "Напольно-потолочные фанкойлы",
               href: "catalog/floor-to-ceiling-fancoils",
            },
         ],
      },
   },
];
