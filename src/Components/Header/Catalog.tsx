import styles from "./Header.module.scss";
import { IoMdClose } from "react-icons/io";

function Catalog({ openMenu, isMenuOpen }: { openMenu: () => void; isMenuOpen: boolean }) {
   return (
      <div className={styles.header__catalog}>
         <button className={styles.header__catalog__btn} onClick={openMenu}>
            {isMenuOpen ? (
               <span>
                  <IoMdClose size={25} />
               </span>
            ) : (
               <span>Каталог</span>
            )}
         </button>
         <button onClick={openMenu} className={styles.header__catalogMobile}>
            <span></span>
            <span></span>
            <span></span>
         </button>
      </div>
   );
}
export default Catalog;
