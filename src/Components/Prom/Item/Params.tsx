import { FancoilModels, FancoilsInner } from "@/Components/Catalog/Fancoils/Fancoils.data";
import styles from "../../Aircond&SemiInd/Params.module.scss";

type Props = {
   el: FancoilsInner;
   elInner: FancoilModels;
};

function Params({ el, elInner }: Props) {
   const params = [
      {
         title: "Наименование",
         param: el.type + " " + "кондиционер",
      },
      {
         title: "Подключение",
         param: el.connect,
      },
      {
         title: "Тип компрессора",
         param: el.engineType,
      },
      {
         title: "Тип ввентилятора",
         param: el.fanType,
      },
      {
         title: "Холодопроизводтельность kW (В/С/Н)",
         param: elInner.coolingPower,
      },
      {
         title: "Давление в сети (Охлаждение)",
         param: elInner.coolingMainsPressure,
      },
      {
         title: "Теплопроизводительность kW (В/С/Н)",
         param: elInner.heatingPower,
      },
      {
         title: "Давление в сети (Обогрев)",
         param: elInner.heatingMainsPressure,
      },
      {
         title: "Расход воздуха max. (m3/h)",
         param: elInner.airFlowm3h,
      },
      {
         title: "Расход воздуха max. (CFM)",
         param: elInner.airFlowcfm,
      },
      {
         title: "Количество компрессоров",
         param: elInner.engineNum,
      },
      {
         title: "Количество вентиляторов",
         param: elInner.fanNum,
      },
      {
         title: "Уровень шума (В/С/Н)",
         param: elInner.noiseLevel,
      },
      {
         title: "Потребляемая мощность (В/С/Н)",
         param: elInner.powerConsumption,
      },
      {
         title: "Габаритные размеры (Д×В×Ш)",
         param: elInner.size,
      },
      {
         title: "Размер упаковки (Д×В×Ш)",
         param: elInner.packageSize,
      },
      {
         title: "Масса кг",
         param: elInner.weight,
      },
      {
         title: "Дренаж",
         param: elInner.drainage,
      },
      {
         title: "эл. нагреватель (AEH)",
         param: elInner.electricHeater ? elInner.electricHeater : null,
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
