"use client";

import styles from "./Cart.module.scss";
import img from "../../../public/Img/Catalog/air-cond.png";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";
import useLocalStorage from "@/Hooks/useLocalStorage";
import { useEffect, useState } from "react";
import { Items } from "./MainGrid";

type Props = {
   dollarVal: number;
   items: Items;
};

function Body({ dollarVal, items }: Props) {
   return (
      items && (
         <div className={styles.bodyContainer}>
            {items.map((el, index) => {
               return (
                  <div key={index} className={styles.body}>
                     <div className={styles.body__img}>
                        <Image src={el.image} alt={el.name} fill style={{ objectFit: "contain" }} />
                     </div>
                     <div className={styles.body__title}>
                        <div className={styles.body__title__main}>
                           {el.name} Модель: {el.model}
                        </div>
                        <div className={styles.body__title__brand}>Бренд: {el.company}</div>
                     </div>
                     <div className={styles.body__count}>
                        <button className={styles.body__btns}>
                           <FiMinus />
                        </button>
                        <input type="number" disabled value={1} className={styles.body__countInput} />
                        <button className={styles.body__btns}>
                           <FaPlus />
                        </button>
                     </div>
                     <div className={styles.body__price}>{(el.price * dollarVal).toLocaleString("en")} сум</div>
                     <div className={styles.body__utils}>
                        <button className={styles.body__utils__delete}>Удалить</button>
                     </div>
                  </div>
               );
            })}
         </div>
      )
   );
}
export default Body;
