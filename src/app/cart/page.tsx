import Cart from "@/Components/Cart/Cart";
import styles from "@/Components/Cart/Cart.module.scss";

export const metadata = {
     title: `Корзина товаров | Buytoday`,
     description: "Корзина товаров",
};

function page() {
     return (
          <div className={styles.cart}>
               <Cart />
          </div>
     );
}
export default page;
