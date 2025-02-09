import Link from "next/link";
import styles from "./Cart.module.scss";
import { TiArrowBack } from "react-icons/ti";
import fetchGraphql from "@/Functions/fetchGraphql";
import MainGrid from "./MainGrid";
import { CurrencyType } from "@/Types/CurrencyType";
import { getCurrencyValue } from "@/fetch/getCurrencyValue";

async function Cart() {
     const currencyVal: CurrencyType = await getCurrencyValue();
     return (
          currencyVal.attributes && (
               <div className="container">
                    <Link href={"/catalog"} className={styles.cart__back}>
                         <TiArrowBack />
                         <span>Вернуться к покупкам</span>
                    </Link>
                    <h2 className={styles.cart__title}>Корзина</h2>
                    <MainGrid dollarVal={currencyVal.attributes.value} />
               </div>
          )
     );
}
export default Cart;
