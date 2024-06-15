import ParamsContent from "@/Components/Common/ItemCard/ParamsContent";
import { AirPurifiersCollection } from "@/app/catalog/air-purifiers/page";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";

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
      <section className={styles.item__params}>
         <h3>Все характеристики</h3>
         <ParamsContent params={params} />
      </section>
   );
}
export default Params;
