"use client";

import { useAppDispatch } from "@/Hooks/ReduxHooks";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Image from "next/image";
import { useState } from "react";
import { setSliderOpen } from "@/Redux/Slices/ItemCard.slice";

type ImgCollection = {
   url: string;
};

type Props = {
   images: ImgCollection[];
   name: string;
};

function Imges({ images, name }: Props) {
   const dispatch = useAppDispatch();
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
         <div onClick={() => dispatch(setSliderOpen(true))} className={`${styles.item__imgBody} ${isTransition ? styles.item__imBodyTransition : ""}`}>
            <Image src={images[currentImg].url} alt={name} fill style={{ objectFit: "contain" }} />
         </div>
         <div className={styles.item__imges__array}>
            {images.length > 1 &&
               images.map((el, index) => {
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
