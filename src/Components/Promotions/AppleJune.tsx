import styles from "./Promotions.module.scss";
import Image from "next/image";
import appleJune from "../../../public/Img/Promotions/promotionJune.jpg";
import Link from "next/link";

function AppleJune() {
   return (
      <div className={styles.promotion}>
         <h1>Купи кондиционер Midea или Welkin в июне и выиграй один из 6 топовых призов от Apple</h1>
         <div className={styles.promotion__date}>Акция действует с 1 по 30 июня</div>
         <div className={styles.promotion__imgBody}>
            <Image src={appleJune} alt="Акция в июне" fill style={{ objectFit: "cover" }} />
         </div>
         <div className={styles.promotion__text}>
            <div className={styles.promotion__text__content}>
               Регистрируетесь в{" "}
               <Link className={styles.promotion__text__link} href={"https://t.me/promotion_midea_bot"} target="_blank">
                  телеграм-боте
               </Link>
            </div>
            <div className={styles.promotion__text__content}>
               Розыгрыш состоится 1 июля в{" "}
               <Link className={styles.promotion__text__link} href={"https://www.instagram.com/your_midea/?hl=ru"} target="_blank">
                  Instagram аккаунте
               </Link>
            </div>
         </div>
      </div>
   );
}
export default AppleJune;
