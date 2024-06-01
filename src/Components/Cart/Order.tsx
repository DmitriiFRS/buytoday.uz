import styles from "./Cart.module.scss";

function Order() {
   return (
      <div className={styles.order}>
         <div className={styles.order__total}>
            <div>Сумма заказа</div>
            <span>25 620 000 сум</span>
         </div>
         <div className={styles.order__btn}>
            <button>Оформить заказ</button>
         </div>
         <div className={styles.order__clear}>
            <button>Очистить корзину</button>
         </div>
      </div>
   );
}
export default Order;
