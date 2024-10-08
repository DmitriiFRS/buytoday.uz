"use client";

import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import styles from "../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { useAppSelector } from "@/Hooks/ReduxHooks";

function ProductPrice({ model, dollarValue }: { model: AircondProductTypeModel; dollarValue: number }) {
   const isWifiActive = useAppSelector((state) => state.itemSlice.isWifiActive);
   return (
      <div className={styles.item__price}>
         {!model.attributes.isInStock
            ? ""
            : `${
                 isWifiActive && model.attributes.wifiPrice
                    ? (model.attributes.wifiPrice * dollarValue).toLocaleString("en-US")
                    : (model.attributes.price * dollarValue).toLocaleString("en-US")
              } UZS`}
      </div>
   );
}
export default ProductPrice;
