import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Promotions/Promotions.module.scss";
import AppleJune from "@/Components/Promotions/AppleJune";

function page() {
   return (
      <section className={styles.promotions}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <AppleJune />
         </div>
      </section>
   );
}
export default page;
