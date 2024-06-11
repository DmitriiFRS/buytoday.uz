import { WashCollection } from "@/app/catalog/wash/page";
import styles from "../../Aircond&SemiInd/Params.module.scss";

function Params({ el }: { el: WashCollection }) {
   const params = [
      {
         title: "Наименование",
         param: "Стиральная машина",
      },
      {
         title: "Сушка",
         param: el.isDrying ? "Да" : "Нет",
      },
      {
         title: "Количество программ",
         param: el.programNums,
      },
      {
         title: "Оборотов в минуту",
         param: el.rpm,
      },
      {
         title: "Размеры (ШхВхГ)",
         param: el.size,
      },
   ];
   return (
      <ul className={styles.params}>
         {params.map((item, index) => {
            return (
               <li className={styles.params__item} key={index}>
                  <span className={styles.params__title}>{item.title}</span>
                  <span className={styles.params__separator}></span>
                  <div className={styles.params__param}>{item.param}</div>
               </li>
            );
         })}
      </ul>
   );
}
export default Params;
