import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Grid from "@/Components/Wishlist/Grid";
import styles from "@/Components/Wishlist/Wishlist.module.scss";

export const metadata = {
   title: "Избранное | Amazon-Asia",
   description: "Избранные товары",
};

function page() {
   return (
      <section className={styles.wishlist}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Grid />
         </div>
      </section>
   );
}
export default page;
