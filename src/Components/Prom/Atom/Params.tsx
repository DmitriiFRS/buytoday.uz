import { AtomIModel } from "@/Data/atomInner.data";
import { AtomModel } from "@/Data/atomOuter.data";
import styles from "../../Aircond&SemiInd/Params.module.scss";
import { Element, ElementInner } from "./Main";

type Props = {
   el: Element;
   elInner: ElementInner;
};

function Params({ el, elInner }: Props) {
   const params = [
      {
         title: "Подключение",
         param: el.connect,
      },
      {
         title: "Количество хладагента",
         param: el.fanQuantity,
      },
      {
         title: "Тип вентилятора",
         param: el.fanType,
      },
      {
         title: "Тип фреона",
         param: el.freonType,
      },
      {
         title: "Компрессор",
         param: el.compressor,
      },
      {
         title: "Количество компрессоров",
         param: el.compressorQuantity,
      },
      {
         title: "Подключаемый внутренний блок",
         param: el.connectableIndoor,
      },
      {
         title: "Холодопроизводительность (kW)",
         param: elInner.coolingPower,
      },
      {
         title: "Теплопроизводительность (kW)",
         param: elInner.heatingPower,
      },
      {
         title: "COP",
         param: elInner.cop,
      },
      {
         title: "EER",
         param: elInner.eer,
      },
      {
         title: "Расход воздуха (m3/h)",
         param: elInner.airFlow,
      },
      {
         title: "Макс. кол-во подключаемых внутренних блоков",
         param: elInner.maxInnerBlocks,
      },
      {
         title: "Уровень шума (dB)",
         param: elInner.noiseLevel,
      },
      {
         title: "Размеры (Д×В×Ш)",
         param: elInner.size,
      },
      {
         title: "Масса (кг)",
         param: elInner.weight,
      },
      {
         title: "Подключение труб (жидкость/газ)",
         param: elInner.pipeConnect,
      },
      {
         title: "Дренаж",
         param: elInner.drenage,
      },
      {
         title: "Статическое давление",
         param: elInner.staticPressure,
      },
      {
         title: "Размер панели (Д×В×Ш)",
         param: elInner.panelSize,
      },
      {
         title: "Вес панели (кг)",
         param: elInner.panelWeight,
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
