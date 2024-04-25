import styles from "./Footer.module.scss";
import Image from "next/image";
import logo from "../../../public/Logos/MideaLogo.png";
import { catalog } from "./Footer.data";
import Link from "next/link";
import { nav } from "../Header/Header.data";
import { MdOutlineEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={styles.footer__container}>
            <Link href={"/"} className={styles.footer__logo}>
               <Image src={logo} alt="Логотип" fill />
            </Link>
            <div className={styles.footer__catalog}>
               <h4 className={styles.footer__title}>Каталог</h4>
               <ul>
                  {catalog.map((el) => {
                     return (
                        <li className={styles.footer__elem} key={el.id}>
                           <Link href={el.href}>{el.title}</Link>
                        </li>
                     );
                  })}
               </ul>
            </div>
            <nav className={styles.footer__nav}>
               <h4 className={styles.footer__title}>Навигация</h4>
               <ul>
                  {nav.map((el) => {
                     return (
                        <li className={styles.footer__elem} key={el.id}>
                           <Link href={el.href}>{el.title}</Link>
                        </li>
                     );
                  })}
               </ul>
            </nav>
            <div className={styles.footer__contacts}>
               <h4 className={styles.footer__title}>Контакты</h4>
               <ul>
                  <li className={`${styles.footer__elem} ${styles.footer__elem__contacts}`}>
                     <MdOutlineEmail size={20} />
                     <span>example@gmail.com</span>
                  </li>
                  <li className={`${styles.footer__elem} ${styles.footer__elem__contacts}`}>
                     <FaPhone size={20} />
                     <span>+19929434343</span>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
}
export default Footer;
