import FreeInstall from "@/Components/Promotions/Free-Install/FreeInstall";
import styles from "@/Components/Promotions/Promotions.module.scss";
import September from "@/Components/Promotions/september/September";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";

export const metadata = {
   title: `Акция в июле от Midea и Welkin | ${process.env.BRAND}`,
   description: "Скидки, акции и выгодные предложения от компании Midea и Welkin",
};

function page() {
   return (
      <section className={styles.promotions}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <September />
         </div>
      </section>
   );
}
export default page;
