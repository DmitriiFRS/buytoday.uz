import { AircondDataInner, AircondDataModel } from "@/app/catalog/air-conditioners/[item]/page";
import styles from "../../Aircond&SemiInd/Params.module.scss";

type Props = {
   el: AircondDataInner;
   elInner: AircondDataModel;
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
         title: "Холодопроизводительность Btu/h",
         param: elInner.coolingPowerBtu,
      },
      {
         title: "Холодопроизводтельность kW",
         param: elInner.coolingPowerKw,
      },
      {
         title: "Теплопроизводительность Btu/h",
         param: elInner.heatPowerBtu,
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
         title: "Размер внеш. блока (Ш.В.Г)",
         param: elInner.outerBlockSize,
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
         title: "Уровень шума внеш.бл.(dB)",
         param: elInner.outerNoise,
      },
      {
         title: "Вес внут. блока (kg)",
         param: elInner.innerWeight,
      },
      {
         title: "Вес внеш. блока (kg)",
         param: elInner.outerWeight,
      },
      {
         title: "Длина трассы (m)",
         param: elInner.routeLength,
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
