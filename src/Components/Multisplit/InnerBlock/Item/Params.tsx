import { MultiInnerDataModel, MultiInnerMain } from "@/app/catalog/multisplit-inner/page";
import styles from "../../../Aircond&SemiInd/Params.module.scss";

type Props = {
   el: MultiInnerMain;
   elInner: MultiInnerDataModel;
};

function Params({ el, elInner }: Props) {
   const params = [
      {
         title: "Наименование",
         param: "Бытовой кондиционер",
      },
      {
         title: "Инверторный",
         param: el.isInverter ? "Да" : "Нет",
      },
      {
         title: "Диапазон температур",
         param: el.temperatureRange,
      },
      {
         title: "Компрессор",
         param: el.compressor,
      },
      {
         title: "Холодопроизводтельность kW",
         param: elInner.coolingPowerKw,
      },
      {
         title: "Теплопроизводительность kW",
         param: elInner.heatPowerKw,
      },
      {
         title: "Расход воздуха max. (m3/h)",
         param: elInner.airFlow,
      },
      {
         title: "Обслуживаемая площадь (m2)",
         param: elInner.aream2,
      },
      {
         title: "Обслуживаемый объем (m3)",
         param: elInner.aream3,
      },
      {
         title: "Размер внутр. блока (Ш.В.Г)",
         param: elInner.blockSize,
      },
      {
         title: "Расход эл-ва (kW) от",
         param: elInner.energyOutput,
      },
      {
         title: "Кол-во / марка фреона (g)",
         param: elInner.freonQuantity,
      },
      {
         title: "Уровень шума внутр.бл.(dB) от",
         param: elInner.innerNoise,
      },
      {
         title: "Вес внут. блока (kg)",
         param: elInner.innerWeight,
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
