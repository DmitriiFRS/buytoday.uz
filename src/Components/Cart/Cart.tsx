import Link from "next/link";
import styles from "./Cart.module.scss";
import { TiArrowBack } from "react-icons/ti";
import Body from "./Body";
import Order from "./Order";

function Cart() {
   return (
      <div className="container">
         <Link href={"/catalog"} className={styles.cart__back}>
            <TiArrowBack />
            <span>Вернуться к покупкам</span>
         </Link>
         <h2 className={styles.cart__title}>Корзина</h2>
         <section className={styles.grid}>
            <Body />
            <Order />
         </section>
      </div>
   );
}
export default Cart;
