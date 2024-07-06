import styles from "@/Components/Promotions/Promotions.module.scss";
import Image from "next/image";
import freeInstall from "../../../../public/Img/Promotions/free-install-july.jpg";
import Link from "next/link";

function FreeInstall() {
   return (
      <div className={styles.promotion}>
         <h1>Специальное предложение от Midea и Welkin!</h1>
         <div className={styles.promotion__date}>Акция действует с 6 по 31 июля</div>
         <div className={styles.promotion__imgBody}>
            <Image src={freeInstall} alt="Бесплатная установка в июле" fill style={{ objectFit: "contain" }} />
         </div>
         <div className={styles.promotion__text}>
            <div className={styles.promotion__text__content}>
               Только с 6 по 31 июля, приобретая любой кондиционер Midea или Welkin, вы получаете установку абсолютно БЕСПЛАТНО!
            </div>
            <div className={styles.promotion__text__content}>
               Не теряйте времени — звоните и заказывайте сегодня! Ваш комфорт всего в одном звонке:{" "}
               <Link className={styles.promotion__text__link} href={"tel:+998909708949"} target="_blank">
                  +998 90 970 89 49
               </Link>
            </div>
         </div>
      </div>
   );
}
export default FreeInstall;
