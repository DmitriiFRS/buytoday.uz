import { getPopulars } from "@/fetch/getPopulars";
import styles from "../Homepage.module.scss";
import Image from "next/image";
import Link from "next/link";
import { getCurrencyValue } from "@/fetch/getCurrencyValue";
import TopCard from "./TopCard";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";

async function Top() {
   const popularGoods = await getPopulars();
   const dollarValue = await getCurrencyValue();

   return (
      <section className={styles.top}>
         <div className="container">
            <h2 className={styles.top__title}>Хит продаж</h2>
            <div className={styles.top__cols}>
               {popularGoods.data.attributes.productModels.data.map((el: AircondProductTypeModel, index: number) => {
                  return <TopCard product={el} dollarValue={dollarValue} key={index} />;
               })}
            </div>
         </div>
      </section>
   );
}
export default Top;
