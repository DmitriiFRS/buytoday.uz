import styles from "./Catalog.module.scss";
import CatalogSection from "./CatalogSection";
import { catalogList } from "./Data/Catalog.data";

function CatalogContainer() {
   return (
      <div className={`container ${styles.catalog__container}`}>
         {catalogList.map((el, index) => {
            return <CatalogSection key={index} el={el} />;
         })}
      </div>
   );
}
export default CatalogContainer;
