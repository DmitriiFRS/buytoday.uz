import styles from "./Cart.module.scss";
import accept from "../../../public/svg/accept.svg";
import Image from "next/image";

function AcceptRequest({ closeOrderWindow }: { closeOrderWindow: () => void }) {
   return (
      <div className={styles.popup__accept}>
         <div className={styles.popup__img}>
            <Image src={accept} alt="заявка принята" fill />
         </div>
         <h3>Спасибо за заказ!</h3>
         <p>Ваш заказ принят в обработку. В ближайшее время с вами свяжется наш менеджер для уточнения деталей.</p>
         <button className={styles.popup__btnClose} onClick={closeOrderWindow}>
            Закрыть
         </button>
      </div>
   );
}
export default AcceptRequest;
