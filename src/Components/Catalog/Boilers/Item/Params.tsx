import { BoilersCollection } from "@/app/catalog/boilers/page";
import styles from "../../../Aircond&SemiInd/Params.module.scss";

function Params({ el }: { el: BoilersCollection }) {
   const params = [
      {
         title: "Наименование",
         param: "Газовый котел",
      },
      {
         title: "Источник нагрева",
         param: el.gasType,
      },
      {
         title: "Рабочее давление газа",
         param: el.pressure,
      },
      {
         title: "КПД",
         param: el.efficiency,
      },
      {
         title: "Рабочий диапазон температур (отопление)",
         param: el.heatTempaerature,
      },
      {
         title: "Рабочий диапазон температур (Горячая вода)",
         param: el.temperatureWater,
      },
      {
         title: "Рабочее давление",
         param: el.workPressure,
      },
      {
         title: "Номинальное напряжение",
         param: el.voltage,
      },
      {
         title: "Максимальная теплопроизводительность",
         param: el.heatOutput,
      },
      {
         title: "Габаритные размеры",
         param: el.size,
      },
      {
         title: "Объем расширительного бака",
         param: el.tankSize,
      },
      {
         title: "Горячая вода при t =25 C (литр/мин.)",
         param: el.literMin25,
      },
      {
         title: "Горячая вода при t =30 C (литр/мин.)",
         param: el.literMin30,
      },
      {
         title: "Максимальное/Минимальное давление газа",
         param: el.maxMinGasPressure,
      },
      {
         title: "Подача кислорода",
         param: el.oxygenSupply,
      },
      {
         title: "Тип камеры сгорания",
         param: el.chamberType,
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
