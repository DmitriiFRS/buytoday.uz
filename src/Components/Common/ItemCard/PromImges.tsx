"use client";

import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Image, { StaticImageData } from "next/image";
import { useState } from "react";

type Props = {
   images: StaticImageData[];
   name: string;
};

function PromImges({ images, name }: Props) {
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
            <Image src={images[currentImg]} alt={name} fill style={{ objectFit: "contain" }} />
         </div>
         <div className={styles.item__imges__array}>
            {images.length > 1 &&
               images.map((el, index) => {
                  return (
                     <button onClick={() => changeImage(index)} key={index} className={`${styles.item__imges__imgBody}`}>
                        <Image src={el} alt={name} fill style={{ objectFit: "contain" }} />
                     </button>
                  );
               })}
         </div>
      </div>
   );
}
export default PromImges;
