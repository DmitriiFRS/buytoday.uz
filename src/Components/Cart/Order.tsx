import { useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import { Items } from "./MainGrid";

type Props = {
   isOrderActive: boolean;
   setOrderActive: (bool: boolean) => void;
   dollarVal: number;
   items: Items;
};

function Order({ isOrderActive, setOrderActive, dollarVal, items }: Props) {
   const [total, setTotal] = useState<null | number | string>(null);
   useEffect(() => {
      let tempTotal: number = 0;
      items.forEach((el) => {
         if (el.price) tempTotal += el.price * dollarVal * el.count;
         if (el.wifiPrice) tempTotal += el.wifiPrice * dollarVal * el.count;
      });
      setTotal(tempTotal.toLocaleString("en"));
   }, [items]);
   function openOrderWindow() {
      const scrollWidth = window.innerWidth - document.body.clientWidth;
      setOrderActive(true);
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollWidth}px`;
   }
   return (
      total &&
      (items.length < 1 ? (
         ""
      ) : (
         <div className={styles.order__container}>
            <div className={styles.order}>
               <div className={styles.order__total}>
                  <div>Сумма заказа</div>
                  <span>{total} сум</span>
               </div>
               <div className={styles.order__btn}>
                  <button onClick={openOrderWindow}>Оформить заказ</button>
               </div>
               <div className={styles.order__clear}>
                  <button>Очистить корзину</button>
               </div>
            </div>
         </div>
      ))
   );
}
export default Order;
