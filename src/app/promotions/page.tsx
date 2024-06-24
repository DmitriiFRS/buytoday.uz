import Promotions from "@/Components/Promotions/Promotions";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Promotions/Promotions.module.scss";

export const metadata = {
   title: `Скидки и акции | ${process.env.BRAND}`,
   description: "Скидки, акции и выгодные предложения",
   keywords: ["акции", "скидки", "промокоды"],
};

function promotions() {
   return (
      <section className={styles.promotions}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Promotions />
         </div>
      </section>
   );
}
export default promotions;
