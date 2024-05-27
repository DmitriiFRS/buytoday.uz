"use client";

import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Image from "next/image";
import { AircondDataInner } from "@/app/catalog/air-conditioners/[item]/page";
import { useState } from "react";

function Imges({ el }: { el: AircondDataInner }) {
   const [currentImg, setCurrentImg] = useState(0);
   const [isTransition, setTransition] = useState(false);
   function changeImage(index: number) {
      if (isTransition || index === currentImg) return;
      setTransition(true);
      setTimeout(() => {
         setCurrentImg(index);
         setTransition(false);
      }, 500);
   }
   return (
      <div className={styles.item__imges}>
         <div className={`${styles.item__imgBody} ${isTransition ? styles.item__imBodyTransition : ""}`}>
            <Image src={el.imageCollection.items[currentImg].url} alt={el.name} fill style={{ objectFit: "contain" }} />
         </div>
         <div className={styles.item__imges__array}>
            {el.imageCollection.items.length > 1 &&
               el.imageCollection.items.map((el, index) => {
                  return (
                     <button onClick={() => changeImage(index)} key={index} className={`${styles.item__imges__imgBody}`}>
                        <Image src={el.url} alt="alba" fill style={{ objectFit: "contain" }} />
                     </button>
                  );
               })}
         </div>
      </div>
   );
}
export default Imges;
