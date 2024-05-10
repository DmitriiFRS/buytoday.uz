"use client";
import { useState } from "react";
import styles from "./Params.module.scss";

function WifiOption() {
   const [isActive, setActive] = useState(false);
   return (
      <div className={styles.wifi}>
         <div className={styles.wifi__title}>Опция Wi-fi</div>
         <input
            className={`${styles.wifi__checkbox} ${isActive ? styles.wifi__checkbox__checked : ""}`}
            type="checkbox"
            onChange={() => setActive(!isActive)}
            checked={isActive}
         />
      </div>
   );
}
export default WifiOption;
