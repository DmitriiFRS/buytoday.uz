"use client";

import { AircondDataModel } from "@/app/catalog/air-conditioners/[item]/page";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { useAppSelector } from "@/Hooks/ReduxHooks";

function Price({ el2, dollarValue }: { el2: AircondDataModel; dollarValue: number }) {
   const isWifiActive = useAppSelector((state) => state.itemSlice.isWifiActive);
   const dollarVal = dollarValue;
   return (
      <div className={styles.item__price}>
         {isWifiActive ? (el2.wifiPrice * dollarVal).toLocaleString("en-US") : (el2.price * dollarVal).toLocaleString("en-US")} <span>UZS</span>
      </div>
   );
}
export default Price;
