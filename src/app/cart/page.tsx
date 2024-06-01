import Cart from "@/Components/Cart/Cart";
import styles from "@/Components/Cart/Cart.module.scss";

function page() {
   return (
      <div className={styles.cart}>
         <Cart />
      </div>
   );
}
export default page;
