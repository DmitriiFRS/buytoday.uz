import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";

type Props = {
   price: number;
   dollarValue: number;
};

function Price({ price, dollarValue }: Props) {
   return (
      <div className={styles.item__price}>
         {(price * dollarValue).toLocaleString("en-US")} <span>UZS</span>
      </div>
   );
}
export default Price;
