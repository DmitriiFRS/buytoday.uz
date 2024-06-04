import styles from "./Cart.module.scss";

function OrderPopup({ isOrderActive }: { isOrderActive: boolean }) {
   return (
      <div className={`${styles.popup} ${isOrderActive ? styles.popup__active : ""}`}>
         <div className={styles.popup__body}>
            <h3 className={styles.popup__title}>Оформление заказа</h3>
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
                  <label htmlFor="orderDesc">Комментарии к заказу</label>
                  <textarea className={styles.popup__input} id="orderDesc"></textarea>
               </div>
            </div>
         </div>
      </div>
   );
}
export default OrderPopup;
