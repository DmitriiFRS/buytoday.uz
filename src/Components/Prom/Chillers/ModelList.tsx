"use client";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/Hooks/ReduxHooks";
import { setHidden } from "@/Redux/Slices/ItemCard.slice";
import { ChillersInner } from "@/Components/Catalog/Chillers/Chillers.data";

function ModelList({ el, index2 }: { el: ChillersInner; index2: number }) {
   const dispatch = useAppDispatch();
   const isHidden = useAppSelector((state) => state.itemSlice.isHidden);
   function toggleHidden() {
      dispatch(setHidden(!isHidden));
   }
   return (
      <>
         <ul className={`${styles.item__models} ${el.chillerModel.length > 9 && isHidden ? styles.item__models__limited : ""}`}>
            {el.chillerModel.map((models, modelIdx) => {
               return (
                  <li key={modelIdx} className={index2 === modelIdx ? styles.item__models__active : ""}>
                     <Link href={`${el.url}_${models.model.replace(/\s|\//g, "-").toLowerCase()}`}>{models.model}</Link>
                  </li>
               );
            })}
         </ul>
         {el.chillerModel.length > 9 ? (
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
      </>
   );
}
export default ModelList;
