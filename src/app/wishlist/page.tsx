import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import Main from "@/Components/Wishlist/Main";
import styles from "@/Components/Wishlist/Wishlist.module.scss";

function page() {
   return (
      <section className={styles.wishlist}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main />
         </div>
      </section>
   );
}
export default page;
