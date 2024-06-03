import styles from "./Cart.module.scss";

function OrderPopup() {
   return (
      <div className={styles.popup}>
         <div className={styles.popup__body}>
            <h3 className={styles.popup__title}>Оформление заказа</h3>
            <div className={styles.popup__formGrid}>
               <div className={`${styles.popup__field} ${styles.popup__field__name}`}>
                  <label htmlFor="orderName">Как к вам обращаться</label>
                  <input type="text" id="orderName" />
               </div>
               <div className={`${styles.popup__field} ${styles.popup__field__mail}`}>
                  <label htmlFor="orderEmail">E-Mail</label>
                  <input type="text" id="orderEmail" />
               </div>
               <div className={`${styles.popup__field} ${styles.popup__field__tel}`}>
                  <label htmlFor="orderPhone">Телефон</label>
                  <input type="text" id="orderPhone" />
               </div>
               <div className={`${styles.popup__field} ${styles.popup__field__desc}`}>
                  <label htmlFor="orderDesc">Комментарии к заказу</label>
                  <textarea id="orderDesc"></textarea>
               </div>
            </div>
         </div>
      </div>
   );
}
export default OrderPopup;
