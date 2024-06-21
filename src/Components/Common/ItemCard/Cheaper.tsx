import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Image from "next/image";
import icon from "../../../../public/Img/Item/money.jpg";

function Cheaper() {
   return (
      <div className={styles.item__cheaper}>
         <div className={styles.item__cheaper__img}>
            <Image src={icon} alt="нашли дешевле?" fill style={{ objectFit: "contain" }} />
         </div>
         <div className={styles.item__cheaper__titleBody}>
            <h3 className={styles.item__cheaper__title}>Найдете дешевле?</h3>
            <span>Сообщите нам, и мы снизим цену</span>
         </div>
      </div>
   );
}
export default Cheaper;
