import styles from "../../Aircond&SemiInd/Params.module.scss";
import { VRFInner, VRFInnerBody, VRFInnerModel } from "@/Components/Catalog/VrfInner/VrfInner.data";

type Props = {
   el: VRFInnerBody;
   elInner: VRFInnerModel;
};

function Params({ el, elInner }: Props) {
   const params = [
      {
         title: "Подключение",
         param: el.connect,
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
         title: "Дренаж",
         param: elInner.drainage,
      },
      {
         title: "Уровень шума (dB)",
         param: elInner.noiseLevel,
      },
      {
         title: "Габаритный размер (ДxВxШ)",
         param: elInner.size,
      },
      {
         title: "Размер упаковки (ДxВxШ)",
         param: elInner.packageSize,
      },
      {
         title: "Жидкость/Газ контур мм",
         param: elInner.pipeConnect,
      },
      {
         title: "Вес Нетто",
         param: elInner.weight,
      },
      {
         title: "Габаритный размер панели (ДxВxШ)",
         param: elInner.panelSize,
      },
      {
         title: "Размер упаковки панели (ДxВxШ)",
         param: elInner.panelPackageSize,
      },
      {
         title: "Вес панели",
         param: elInner.panelWeight,
      },
      {
         title: "Статическое давление Pa",
         param: elInner.staticPressure,
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
