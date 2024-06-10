"use client";

import { ReactNode, useState } from "react";
import styles from "./Utilities.module.scss";
import { IoCloseSharp } from "react-icons/io5";

function MenuModalWindow({ btnText, children, toggleWindow }: { btnText: string; children: ReactNode; toggleWindow: (bool: boolean) => void }) {
   const [isTransition, setTransition] = useState(false);
   function close() {
      if (isTransition) return;
      setTransition(true);
      setTimeout(() => {
         toggleWindow(false);
      }, 500);
   }
   return (
      <div className={`${styles.menuModal} ${isTransition ? styles.menuModal__transition : ""}`}>
         <button onClick={close} className={styles.menuModal__close}>
            <IoCloseSharp />
         </button>
         {children}
         <button onClick={close} className={styles.menuModal__find}>
            {btnText}
         </button>
      </div>
   );
}
export default MenuModalWindow;
