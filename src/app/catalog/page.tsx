import styles from "@/Components/Catalog/Catalog.module.scss";
import CatalogContainer from "@/Components/Catalog/CatalogContainer";

async function page() {
   return (
      <div className={styles.catalog}>
         <CatalogContainer />
      </div>
   );
}
export default page;
