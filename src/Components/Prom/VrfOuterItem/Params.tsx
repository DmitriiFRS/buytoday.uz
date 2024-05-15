import styles from "../../Aircond&SemiInd/Params.module.scss";
import { VRFInner, VRFModel } from "@/Components/Catalog/VrfOuter/VrfOuter.data";

type Props = {
   el: VRFInner;
   elInner: VRFModel;
};

function Params({ el, elInner }: Props) {
   const params = [
      {
         title: "Тип фреона",
         param: el.freonType,
      },
      {
         title: "Подключение",
         param: el.connect,
      },
      {
         title: "Тип компрессора",
         param: el.compressor,
      },
      {
         title: "Тип ввентилятора",
         param: el.fanType,
      },
      {
         title: "Рабочая температура (Охлаждение)",
         param: el.temperatureRangeCooling,
      },
      {
         title: "Рабочая температура (Обогрев)",
         param: el.temperatureRangeHeat,
      },
      {
         title: "Холодопроизводтельность kW",
         param: elInner.coolingPower,
      },
      {
         title: "Потребляемая мощность (Охлаждение)",
         param: elInner.coolingEnergyConsumption,
      },
      {
         title: "Теплопроизводительность kW",
         param: elInner.heatingPower,
      },
      {
         title: "Потребляемая мощность (Обогрев)",
         param: elInner.heatingEnergyConsumption,
      },
      {
         title: "Расход воздуха max. (m3/h)",
         param: elInner.airFlow,
      },
      {
         title: "Количество компрессоров",
         param: elInner.compressorQuantity,
      },
      {
         title: "Количество вентиляторов",
         param: elInner.fanQuantity,
      },
      {
         title: "EER",
         param: elInner.eer,
      },
      {
         title: "COP",
         param: elInner.cop,
      },
      {
         title: "Количество фреона",
         param: elInner.freonQuantity,
      },
      {
         title: "Габаритные размеры (Д×В×Ш)",
         param: elInner.size,
      },
      {
         title: "Макс. кол-во подключаемых внутр. блоков",
         param: elInner.maxInnerBlocks,
      },
      {
         title: "Уровень шума (dB)",
         param: elInner.noiseLevel,
      },
      {
         title: "Подключение труб жидкостный/газовый контур",
         param: elInner.pipeConnect,
      },
      {
         title: "Масса кг",
         param: elInner.weight,
      },
   ];
   return (
      <ul className={styles.params}>
         {params.map((item, index) => {
            return item.param ? (
               <li className={styles.params__item} key={index}>
                  <span className={styles.params__title}>{item.title}</span>
                  <span className={styles.params__separator}></span>
                  <div className={styles.params__param}>{item.param}</div>
               </li>
            ) : (
               ""
            );
         })}
      </ul>
   );
}
export default Params;
