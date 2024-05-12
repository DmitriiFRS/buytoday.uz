import { SemiIndDataModel } from "@/app/catalog/col-conditioners/[item]/page";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";

function Price({ el2, dollarValue }: { el2: SemiIndDataModel; dollarValue: number }) {
   const dollarVal = dollarValue;
   return (
      <div className={styles.item__price}>
         {(el2.price * dollarVal).toLocaleString("en-US")} <span>UZS</span>
      </div>
   );
}
export default Price;
