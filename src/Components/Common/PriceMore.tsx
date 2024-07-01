import styles from "../Aircond&SemiInd/AircondSemi.module.scss";

type Props = {
   price: number;
   currencyVal: number;
   inStock: boolean;
};

function PriceMore({ price, currencyVal, inStock }: Props) {
   return (
      <div className={styles.aircond__item__side}>
         <div className={styles.aircond__item__price}>{inStock ? (price * currencyVal).toLocaleString("en") + " " + "UZS" : "Нет в наличии"}</div>
         <button className={styles.aircond__item__btn}>
            <span>Подробнее</span>
         </button>
      </div>
   );
}
export default PriceMore;
