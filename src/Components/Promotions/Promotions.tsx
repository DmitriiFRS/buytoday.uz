import styles from "./Promotions.module.scss";
import promotionJune from "../../../public/Img/Promotions/promotionJune.jpg";
import september from "../../../public/Img/Promotions/septemberDesk.webp";
import freeInstall from "../../../public/Img/Promotions/free-install-july.jpg";
import Image from "next/image";
import Link from "next/link";

const promotions = [
   {
      title: "Специальное предложение от Midea и Welkin!",
      description: "Только с 6 по 31 июля, приобретая любой кондиционер Midea или Welkin, вы получаете установку абсолютно БЕСПЛАТНО!",
      image: freeInstall,
      href: "/promotions/free-install",
      date: "06.07.2024 - 31.07.2024",
   },
   {
      title: "Купи кондиционер Midea или Welkin в июне и выиграй один из 6 топовых призов от Apple",
      description: "iPhone 15 Pro Max, MacBook Pro, iPad Pro, Apple Watch 9, AirPods Pro и AirPods",
      image: promotionJune,
      href: "/promotions/apple-june",
      date: "01.06.2024 - 30.06.2024",
   },
   {
      title: "Специальное предложение от Midea и Welkin!",
      description: "Только с 1 по 31 сентября, приобретая любой кондиционер Midea или Welkin, вы сможете выиграть топовый iPhone 15 pro max!",
      image: september,
      href: "/promotions/september",
      date: "01.09.2024 - 30.09.2024",
   },
];

function Promotions() {
   return (
      <div className={styles.main}>
         <h1 className={styles.main__title}>Акции и скидки</h1>
         <div className={styles.main__content}>
            {promotions.map((el, index) => {
               return (
                  <Link href={el.href} key={index} className={styles.main__content__item} style={{ color: "inherit" }}>
                     <div className={styles.main__content__item__img}>
                        <Image src={el.image} alt="Акция" fill style={{ objectFit: "contain" }} />
                     </div>
                     <div className={styles.main__content__item__text}>
                        <h2>{el.title}</h2>
                        <p>{el.description}</p>
                     </div>
                     <div className={styles.main__content__item__date}>{el.date}</div>
                  </Link>
               );
            })}
         </div>
      </div>
   );
}
export default Promotions;
