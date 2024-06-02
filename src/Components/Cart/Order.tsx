import { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import { Items } from "./MainGrid";

type Props = {
   dollarVal: number;
   items: Items;
};

function Order({ dollarVal, items }: Props) {
   const [total, setTotal] = useState<null | number | string>(null);
   useEffect(() => {
      let tempTotal: number = 0;
      items.forEach((el) => {
         tempTotal += el.price * dollarVal;
      });
      setTotal(tempTotal.toLocaleString("en"));
   }, [items]);
   return (
      <div className={styles.order}>
         <div className={styles.order__total}>
            <div>Сумма заказа</div>
            <span>{total} сум</span>
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
