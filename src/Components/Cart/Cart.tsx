import Link from "next/link";
import styles from "./Cart.module.scss";
import { TiArrowBack } from "react-icons/ti";
import Body from "./Body";
import Order from "./Order";
import fetchGraphql from "@/Functions/fetchGraphql";
import MainGrid from "./MainGrid";

type DollarValue = {
   data: {
      dollarValue: {
         value: number;
      };
   };
};

async function Cart() {
   const data: DollarValue = await fetchGraphql(`
   query {
      dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
         value
       }
   }
   
   `);
   return (
      <div className="container">
         <Link href={"/catalog"} className={styles.cart__back}>
            <TiArrowBack />
            <span>Вернуться к покупкам</span>
         </Link>
         <h2 className={styles.cart__title}>Корзина</h2>
         <MainGrid dollarVal={data.data.dollarValue.value} />
      </div>
   );
}
export default Cart;
