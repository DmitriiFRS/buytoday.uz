import styles from "./Header.module.scss";
import { FaSearch } from "react-icons/fa";

function Search() {
   return (
      <div className={styles.header__search}>
         <div className={styles.header__searchBody}>
            <input type="text" placeholder="Хуяндекс. Всё уже найдено" />
            <FaSearch className={styles.header__icon} />
         </div>
      </div>
   );
}
export default Search;
