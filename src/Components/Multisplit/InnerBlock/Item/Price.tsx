import { AircondDataModel } from "@/app/catalog/air-conditioners/[item]/page";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { MultiInnerDataModel } from "@/app/catalog/multisplit-inner/page";

function Price({ el2, dollarValue }: { el2: MultiInnerDataModel; dollarValue: number }) {
   return (
      <div className={styles.item__price}>
         {(el2.price * dollarValue).toLocaleString("en-US")} <span>UZS</span>
      </div>
   );
}
export default Price;
