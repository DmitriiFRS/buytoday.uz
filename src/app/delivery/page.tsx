import Delivery from "@/Components/Delivery/Delivery";
import styles from "@/Components/Delivery/Delivery.module.scss";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";

function page() {
   return (
      <section className={styles.delivery}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Delivery />
         </div>
      </section>
   );
}
export default page;
