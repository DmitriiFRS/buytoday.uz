import styles from "./Header.module.scss";

function Catalog({ openMenu }: { openMenu: () => void }) {
   return (
      <div className={styles.header__catalog}>
         <button onClick={openMenu}>Каталог</button>
         <div className={styles.header__catalog__mobile}>
            <span></span>
            <span></span>
            <span></span>
         </div>
      </div>
   );
}
export default Catalog;
