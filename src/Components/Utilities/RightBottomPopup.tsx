import styles from "./Utilities.module.scss";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

type Props = {
   isPopupOpen: boolean;
   setPopupOpen: (b: boolean) => void;
};

function RightBottomPopup({ isPopupOpen, setPopupOpen }: Props) {
   function closePopup() {
      setPopupOpen(false);
   }
   return (
      <div className={`${styles.popup} ${isPopupOpen ? styles.popup__active : ""}`}>
         <div className={styles.popup__text}>
            Товар добавлен в{" "}
            <Link className={styles.popup__link} href={"/wishlist"}>
               избранное
            </Link>
         </div>
         <button onClick={closePopup} className={styles.popup__close}>
            <IoMdClose />
         </button>
      </div>
   );
}
export default RightBottomPopup;
