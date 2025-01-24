"use client";

import styles from "./Cart.module.scss";
import accept from "../../../public/svg/accept.svg";
import Image from "next/image";
import Link from "next/link";

function AcceptRequest() {
     return (
          <div className={styles.popup__accept}>
               <div className={styles.popup__img}>
                    <Image src={accept} alt="заявка принята" fill />
               </div>
               <h3>Спасибо за заказ!</h3>
               <p>Ваш заказ принят в обработку. В ближайшее время с вами свяжется наш менеджер для уточнения деталей.</p>
               <Link href={"/"} className={styles.popup__btnClose}>
                    Вернуться на главную
               </Link>
          </div>
     );
}
export default AcceptRequest;
