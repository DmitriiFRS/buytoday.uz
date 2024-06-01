import styles from "./Cart.module.scss";
import img from "../../../public/Img/Catalog/air-cond.png";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import { FiMinus } from "react-icons/fi";

function Body() {
   return (
      <div className={styles.body}>
         <div className={styles.body__img}>
            <Image src={img} alt="*" fill style={{ objectFit: "contain" }} />
         </div>
         <div className={styles.body__title}>
            <div className={styles.body__title__main}>Инверторный кондиционер Alba, Модель Alba07 7000bTu</div>
            <div className={styles.body__title__brand}>Бренд: Midea</div>
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
         <div className={styles.body__price}>677 000 сум</div>
         <div className={styles.body__utils}>
            <button className={styles.body__utils__delete}>Удалить</button>
         </div>
      </div>
   );
}
export default Body;
