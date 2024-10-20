"use client";

import { useAppDispatch } from "@/Hooks/ReduxHooks";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Image from "next/image";
import { useState } from "react";
import { setSliderOpen } from "@/Redux/Slices/ItemCard.slice";
import { StrapiArrayImageType, StrapiImageType } from "@/Types/Common.type";
import { strapiUrl } from "@/service/const";

type Props = {
   images: StrapiArrayImageType[];
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
   function openSlider() {
      const scrollWidth = window.innerWidth - document.body.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollWidth}px`;
      dispatch(setSliderOpen(true));
   }
   return (
      <div className={styles.item__imges}>
         <div onClick={openSlider} className={`${styles.item__imgBody} ${isTransition ? styles.item__imBodyTransition : ""}`}>
            <Image src={strapiUrl + images[currentImg].attributes.url} alt={name} fill style={{ objectFit: "contain" }} />
         </div>
         <div className={styles.item__imges__array}>
            {images.length > 1 &&
               images.map((el, index) => {
                  return (
                     <button onClick={() => changeImage(index)} key={index} className={`${styles.item__imges__imgBody}`}>
                        <Image src={el.attributes.url} alt="alba" fill style={{ objectFit: "contain" }} />
                     </button>
                  );
               })}
         </div>
      </div>
   );
}
export default Imges;
