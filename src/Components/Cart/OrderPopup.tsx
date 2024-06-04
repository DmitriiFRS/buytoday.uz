import styles from "./Cart.module.scss";
import { IoIosClose } from "react-icons/io";
import Send from "./Send";

type Props = {
   isOrderActive: boolean;
   setOrderActive: (bool: boolean) => void;
   title: string;
   comment: string;
};

function OrderPopup({ isOrderActive, setOrderActive, title, comment }: Props) {
   function closeOrderWindow() {
      document.body.style.overflow = "visible";
      document.body.style.paddingRight = "0px";
      setOrderActive(false);
   }
   return (
      <div onClick={closeOrderWindow} className={`${styles.popup} ${isOrderActive ? styles.popup__active : ""}`}>
         <div onClick={(e) => e.stopPropagation()} className={styles.popup__body}>
            <button onClick={closeOrderWindow} className={styles.popup__close}>
               <IoIosClose />
            </button>
            <h3 className={styles.popup__title}>{title}</h3>
            <div className={styles.popup__formGrid}>
               <div className={`${styles.popup__field} ${styles.popup__field__name}`}>
                  <label htmlFor="orderName">
                     Как к вам обращаться <span>*</span>
                  </label>
                  <input className={styles.popup__input} type="text" id="orderName" />
               </div>
               <div className={`${styles.popup__field} ${styles.popup__field__city}`}>
                  <label htmlFor="orderCity">Город</label>
                  <input className={styles.popup__input} type="text" id="orderCity" />
               </div>
               <div className={`${styles.popup__field} ${styles.popup__field__mail}`}>
                  <label htmlFor="orderEmail">E-Mail</label>
                  <input className={styles.popup__input} type="text" id="orderEmail" />
               </div>
               <div className={`${styles.popup__field} ${styles.popup__field__tel}`}>
                  <label htmlFor="orderPhone">
                     Телефон <span>*</span>
                  </label>
                  <input className={styles.popup__input} type="text" id="orderPhone" />
               </div>
               <div className={`${styles.popup__field} ${styles.popup__field__desc}`}>
                  <label htmlFor="orderDesc">{comment}</label>
                  <textarea className={styles.popup__input} id="orderDesc"></textarea>
               </div>
            </div>
            <Send />
         </div>
      </div>
   );
}
export default OrderPopup;
