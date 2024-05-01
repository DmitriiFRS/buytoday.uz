import { CatalogListInner } from "./Data/Catalog.data";
import styles from "./Catalog.module.scss";
import CatalogItem from "./CatalogItem";

type Props = {
   el: CatalogListInner;
};

function CatalogSection({ el }: Props) {
   return (
      <div className={styles.catalog__section}>
         <h3 className={styles.catalog__title}>{el.title}</h3>
         <div className={styles.catalog__itemGrid}>
            {el.list.map((item, index) => {
               return <CatalogItem key={index} el={item} />;
            })}
         </div>
      </div>
   );
}
export default CatalogSection;
