"use client";

import { useState } from "react";
import OrderPopup from "../Cart/OrderPopup";
import styles from "../Aircond&SemiInd/ItemAircondSemi.module.scss";

const title = "Оформление заявки";
const comment = "Комментарии к заявке";

function PromOrder() {
   const [isOrderActive, setOrderActive] = useState(false);
   function openOrderWindow() {
      const scrollWidth = window.innerWidth - document.body.clientWidth;
      setOrderActive(true);
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollWidth}px`;
   }
   return (
      <>
         <OrderPopup isOrderActive={isOrderActive} setOrderActive={setOrderActive} title={title} comment={comment} />
         <button onClick={openOrderWindow} className={styles.item__buy}>
            Оформить заявку
         </button>
      </>
   );
}
export default PromOrder;
