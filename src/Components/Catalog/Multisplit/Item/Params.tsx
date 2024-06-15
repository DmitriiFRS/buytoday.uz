import { MultiOuterBody } from "@/Data/multisplits.data";
import styles from "../../Aircond&SemiInd/Params.module.scss";

function Params({ el }: { el: MultiOuterBody }) {
   const params = [
      {
         title: "Наименование",
         param: "Наружный блок",
      },
      {
         title: "Диапазон температур (Охлаждение)",
         param: el.params.temperatureCooling,
      },
      {
         title: "Диапазон температур (Обогрев)",
         param: el.params.temperatureHeating,
      },
      {
         title: "Мощность охлаждения (kW)",
         param: el.params.coolingPower,
      },
      {
         title: "Мощность обогрева (kW)",
         param: el.params.heatingPower,
      },
      {
         title: "Потребляемая мощность (Обогрев)",
         param: el.params.heatingEnergyConsumption,
      },
      {
         title: "COP",
         param: el.params.COP,
      },
      {
         title: "EER",
         param: el.params.EER,
      },
      {
         title: "Площадь м2",
         param: el.params.aream2,
      },
      {
         title: "Подключение",
         param: el.params.connect,
      },
      {
         title: "Макс. подключаемых внутр. блоков",
         param: el.params.maxInnerBlocks,
      },
      {
         title: "Размер ШхГхВ, мм",
         param: el.params.size,
      },
      {
         title: "Масса, кг",
         param: el.params.weight,
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
