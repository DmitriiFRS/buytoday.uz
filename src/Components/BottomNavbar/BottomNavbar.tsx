import s from "./s.module.scss";
import tg from "@/../public/Icons/tg-bottom.png";
import call from "@/../public/Icons/call-bottom.png";
import catalog from "@/../public/Icons/catalog-bottom.png";
import Link from "next/link";
import Image from "next/image";

const nav = [
     {
          id: 0,
          title: "Каталог",
          link: "/catalog",
          image: catalog,
     },
     {
          id: 1,
          title: "Телеграм",
          link: "https://t.me/Buytodayuz",
          isContacts: true,
          image: tg,
     },
     {
          id: 2,
          title: "Позвонить",
          link: "tel:+998997971407",
          isContacts: true,
          image: call,
     },
];

const BottomNavbar: React.FC = () => {
     return (
          <div className={s.navbar}>
               {nav.map((item) => {
                    return (
                         <div key={item.id} className={s.navbar__item}>
                              {item.isContacts ? (
                                   <a href={item.link} target="_blank" className={s.navbar__link}>
                                        <Image src={item.image} alt="icon" width={25} height={25} />
                                        <span>{item.title}</span>
                                   </a>
                              ) : (
                                   <Link href={item.link} className={s.navbar__link}>
                                        <Image src={item.image} alt="icon" width={25} height={25} />
                                        <span>{item.title}</span>
                                   </Link>
                              )}
                         </div>
                    );
               })}
          </div>
     );
};

export default BottomNavbar;
