import styles from "@/Components/Promotions/Promotions.module.scss";
import Image from "next/image";
import freeInstall from "../../../../public/Img/Promotions/septemberDesk.webp";
import Link from "next/link";

function September() {
   return (
      <div className={styles.promotion}>
         <h1>Специальное предложение от Midea и Welkin!</h1>
         <div className={styles.promotion__date}>Акция действует с 1 по 30 сентября</div>
         <div className={styles.promotion__imgBody}>
            <Image src={freeInstall} alt="акция" fill style={{ objectFit: "contain" }} />
         </div>
         <div className={styles.promotion__text}>
            <div className={styles.promotion__text__content}>
               Только с 1 по 30 сентября, приобретая любой кондиционер Midea или Welkin, вы сможете выиграть топовый iPhone 15 pro max!
            </div>
            <div className={styles.promotion__text__content}>
               Не теряйте времени — звоните и заказывайте сегодня!
               <Link className={styles.promotion__text__link} href={"tel:+998909708949"} target="_blank">
                  +998 90 970 89 49
               </Link>
            </div>
         </div>
      </div>
   );
}
export default September;
