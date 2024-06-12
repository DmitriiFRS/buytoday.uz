import styles from "../../../Aircond&SemiInd/Params.module.scss";
import { AirPurifiersCollection } from "@/app/catalog/air-purifiers/page";

function Params({ el }: { el: AirPurifiersCollection }) {
   const params = [
      {
         title: "Наименование",
         param: "Очиститель-увлажнитель",
      },
      {
         title: "Cкорость воздуха",
         param: el.airSpeed,
      },
      {
         title: "Концентрация анионов",
         param: el.anions,
      },
      {
         title: "Длина кабеля",
         param: el.cableLength,
      },
      {
         title: "Цвета",
         param: el.colors,
      },
      {
         title: "Cкорость двигателя",
         param: el.engineSpeed,
      },
      {
         title: "Предлагаемый период замены фильтров",
         param: el.filterReplacement,
      },
      {
         title: "Объем формальдегида",
         param: el.formaldehyde,
      },
      {
         title: "Номинальная частота",
         param: el.frequency,
      },
      {
         title: "Площадь помещения",
         param: el.m2,
      },
      {
         title: "Шум (низкая скорость)",
         param: el.noiseLowSpeed,
      },
      {
         title: "Cтепень колебаний",
         param: el.oscillationDegree,
      },
      {
         title: "Объем удаления частиц",
         param: el.particleRemovalVol,
      },
      {
         title: "Номинальная мощность",
         param: el.power,
      },
      {
         title: "Размеры",
         param: el.size,
      },
      {
         title: "Максимальный объем распыления",
         param: el.sprayVolume,
      },
      {
         title: "Емкость бака",
         param: el.tankValue,
      },
      {
         title: "Вес нетто",
         param: el.weight,
      },
   ];
   return (
      <ul className={styles.params}>
         {params.map((item, index) => {
            if (item.param) {
               return (
                  <li className={styles.params__item} key={index}>
                     <span className={styles.params__title}>{item.title}</span>
                     <span className={styles.params__separator}></span>
                     <div className={styles.params__param}>{item.param}</div>
                  </li>
               );
            }
         })}
      </ul>
   );
}
export default Params;
