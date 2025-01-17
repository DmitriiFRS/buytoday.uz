import styles from "./Footer.module.scss";
import Image from "next/image";
import logo from "../../../public/Logos/BuytodayLogo.png";
import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const socials = [
     {
          id: 0,
          icon: <FaTelegramPlane />,
          href: "https://t.me/Buytodayuz",
          className: styles.footer__tg,
     },
     {
          id: 1,
          icon: <FaFacebookF />,
          href: "/",
          className: styles.footer__fb,
     },
     {
          id: 2,
          icon: <FaInstagram />,
          href: "/",
          className: styles.footer__inst,
     },
];

const info = [
     {
          id: 0,
          title: "Доставка",
          href: "/delivery",
     },
     {
          id: 1,
          title: "Сервис",
          href: "/service",
     },
     {
          id: 2,
          title: "Акции и скидки",
          href: "/promotions",
     },
];

const contacts = [
     {
          id: 0,
          title: "+998 77 134 36 60",
          href: "+998771343660",
     },
     {
          id: 1,
          title: "buytoday.uz@gmail.com",
          href: "buytoday.uz@gmail.com",
     },
];

function Footer() {
     return (
          <footer className={styles.footer}>
               <div className={`container ${styles.footer__container}`}>
                    <Link href={"/"} className={styles.footer__logo}>
                         <Image src={logo} alt="Midea" fill style={{ objectFit: "contain" }} />
                    </Link>
                    <div className={styles.footer__social}>
                         <h4 className={styles.footer__title}>Социальные сети</h4>
                         <div className={styles.footer__social__content}>
                              {socials.map((el) => {
                                   return (
                                        <Link href={el.href} target="_blank" key={el.id} className={`${styles.footer__social__icon} ${el.className}`}>
                                             {el.icon}
                                        </Link>
                                   );
                              })}
                         </div>
                    </div>
                    <div className={styles.footer__section}>
                         <h4 className={styles.footer__title}>Информация</h4>
                         <div className={styles.footer__content}>
                              {info.map((el) => {
                                   return (
                                        <Link href={el.href} key={el.id} className={styles.footer__content__item}>
                                             {el.title}
                                        </Link>
                                   );
                              })}
                         </div>
                    </div>
                    <div className={styles.footer__section}>
                         <h4 className={styles.footer__title}>Контакты</h4>
                         <div className={styles.footer__content}>
                              {contacts.map((el, index) => {
                                   return (
                                        <Link href={index === 0 ? `tel:${el.href}` : `mailto:${el.href}`} target="_blank" key={el.id} className={styles.footer__content__item}>
                                             {el.title}
                                        </Link>
                                   );
                              })}
                         </div>
                    </div>
               </div>
          </footer>
     );
}
export default Footer;
