import { FridgeDataInner } from "@/app/catalog/fridges/page";
import styles from "../../Aircond&SemiInd/Params.module.scss";

function Params({ el }: { el: FridgeDataInner }) {
   const params = [
      {
         title: "Наименование",
         param: "Холодильник",
      },
      {
         title: "Общий объём, л",
         param: el.literVol,
      },
      {
         title: "Объём морозильной камеры, л",
         param: el.freezeChamber,
      },
      {
         title: "Объём холодильной камеры, л",
         param: el.fridgeChamber,
      },
      {
         title: "Уровень шума, дБ",
         param: el.noiseLevel,
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
