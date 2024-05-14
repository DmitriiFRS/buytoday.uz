"use client";

import { FancoilsInner } from "@/Components/Catalog/Fancoils/Fancoils.data";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Link from "next/link";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/Hooks/ReduxHooks";
import { setHidden } from "@/Redux/Slices/ItemCard.slice";

function ModelList({ el, index2 }: { el: FancoilsInner; index2: number }) {
   const dispatch = useAppDispatch();
   const isHidden = useAppSelector((state) => state.itemSlice.isHidden);
   function toggleHidden() {
      dispatch(setHidden(!isHidden));
   }
   return (
      <ul className={`${styles.item__models} ${el.fancoilModels.length > 9 && isHidden ? styles.item__models__limited : ""}`}>
         {el.fancoilModels.map((models, modelIdx) => {
            return (
               <li key={modelIdx} className={index2 === modelIdx ? styles.item__models__active : ""}>
                  <Link href={`${el.url}_${models.model.replace(/\s|\//g, "-").toLowerCase()}`}>{models.model}</Link>
               </li>
            );
         })}
         {el.fancoilModels.length > 9 ? (
            isHidden ? (
               <button onClick={toggleHidden} className={styles.item__models__showMore}>
                  Показать больше...
               </button>
            ) : (
               <button onClick={toggleHidden} className={styles.item__models__showMore}>
                  Скрыть
               </button>
            )
         ) : (
            ""
         )}
      </ul>
   );
}
export default ModelList;
