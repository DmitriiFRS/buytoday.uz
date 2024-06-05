import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from "./Cart.module.scss";
import { Items } from "./MainGrid";
import { useAppDispatch } from "@/Hooks/ReduxHooks";
import { setItemsCount } from "@/Redux/Slices/OrderCart.slice";

type Props = {
   setOrderActive: (bool: boolean) => void;
   dollarVal: number;
   items: Items;
   setItem: Dispatch<SetStateAction<Items>>;
};

function Order({ setOrderActive, dollarVal, items, setItem }: Props) {
   const [total, setTotal] = useState<null | number | string>(null);
   const dispatch = useAppDispatch();
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
   function clearCart() {
      setItem([]);
      dispatch(setItemsCount(0));
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
                  <button onClick={clearCart}>Очистить корзину</button>
               </div>
            </div>
         </div>
      ))
   );
}
export default Order;
