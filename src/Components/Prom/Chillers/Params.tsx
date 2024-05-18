import { ChillerModels, ChillersInner } from "@/Components/Catalog/Chillers/Chillers.data";
import styles from "../../Aircond&SemiInd/Params.module.scss";

type Props = {
   el: ChillersInner;
   elInner: ChillerModels;
};

function Params({ el, elInner }: Props) {
   const params = [
      {
         title: "Компрессор",
         param: el.compressor,
      },
      {
         title: "Подключение",
         param: el.connect,
      },
      {
         title: "Тип подключения",
         param: el.connectType,
      },
      {
         title: "Тип управления",
         param: el.controlType,
      },
      {
         title: "Тип вентилятора",
         param: el.fanType,
      },
      {
         title: "Количество вентиляторов",
         param: elInner.fanQuantity,
      },
      {
         title: "Тип фреона",
         param: el.freonType,
      },
      {
         title: "Теплообменник",
         param: el.heatExchanger,
      },
      {
         title: "Заправка маслом",
         param: el.oilType,
      },
      {
         title: "Расход воздуха m3/h",
         param: elInner.airFlow,
      },
      {
         title: "Количество компрессоров",
         param: elInner.compressorQuantity,
      },
      {
         title: "Конденсатор: Расход воды m3/h",
         param: elInner.condenserWaterFlow,
      },
      {
         title: "Конденсатор: Подключение водяных трубок",
         param: elInner.condenserpipeConnect,
      },
      {
         title: "Испаритель: Расход воды m3/h",
         param: elInner.evaporatorWaterFlow,
      },
      {
         title: "Испаритель: Подключение водяных трубок",
         param: elInner.evaporatorpipeConnect,
      },
      {
         title: "COP (Охлаждение)",
         param: elInner.coolingCop,
      },
      {
         title: "Мощность охлаждения (kW)",
         param: elInner.coolingPower,
      },
      {
         title: "Потребляемая мощность (Охлаждение, kW)",
         param: elInner.coolingEnergyConsumption,
      },
      {
         title: "Потребляемая мощность (Обогрев, kW)",
         param: elInner.heatingEnergyConsumption,
      },
      {
         title: "Мощность обогрева (kW)",
         param: elInner.heatingPower,
      },
      {
         title: "COP (Обогрев)",
         param: elInner.heatingCop,
      },
      {
         title: "Количество фреона (кг)",
         param: elInner.freonQuantity,
      },
      {
         title: "IPLV",
         param: elInner.iplv,
      },
      {
         title: "Макс. ток (А)",
         param: elInner.maxPower,
      },
      {
         title: "Макс. пусковой ток (А)",
         param: elInner.maxPowerStart,
      },
      {
         title: "Мощность двигателя (kW)",
         param: elInner.motorPower,
      },
      {
         title: "Уровень шума (dB)",
         param: elInner.noiseLevel,
      },
      {
         title: "Размеры (ДхШхВ)",
         param: elInner.size,
      },
      {
         title: "Объем жидкости (Л)",
         param: elInner.waterVol,
      },
      {
         title: "Масса (кг)",
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
