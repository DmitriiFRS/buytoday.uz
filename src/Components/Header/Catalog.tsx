import styles from "./Header.module.scss";

function Catalog({ openMenu }: { openMenu: () => void }) {
   return (
      <div className={styles.header__catalog}>
         <button onClick={openMenu}>Каталог</button>
      </div>
   );
}
export default Catalog;
