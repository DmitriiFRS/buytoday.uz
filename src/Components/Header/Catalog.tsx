import styles from "./Header.module.scss";

function Catalog({ openMenu }: { openMenu: () => void }) {
   return (
      <div className={styles.header__catalog}>
         <button onClick={openMenu}>Каталог</button>
         <button onClick={openMenu} className={styles.header__catalogMobile}>
            <span></span>
            <span></span>
            <span></span>
         </button>
      </div>
   );
}
export default Catalog;
