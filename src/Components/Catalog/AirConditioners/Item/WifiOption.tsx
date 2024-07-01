"use client";
import styles from "../../../Aircond&SemiInd/Params.module.scss";
import { useAppDispatch, useAppSelector } from "@/Hooks/ReduxHooks";
import { toggleWifiCheckbox } from "@/Redux/Slices/ItemCard.slice";
import { FaWifi } from "react-icons/fa";

function WifiOption() {
   const dispatch = useAppDispatch();
   const isActive = useAppSelector((state) => state.itemSlice.isWifiActive);
   return (
      <div className={styles.wifi}>
         <FaWifi className={styles.wifi__icon} />
         <div className={styles.wifi__title}>Опция Wi-fi</div>
         <input
            className={`${styles.wifi__checkbox} ${isActive ? styles.wifi__checkbox__checked : ""}`}
            type="checkbox"
            onChange={() => dispatch(toggleWifiCheckbox(!isActive))}
            checked={isActive}
         />
      </div>
   );
}
export default WifiOption;
