import { BoilersCollection } from "@/app/catalog/boilers/page";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import ParamsContent from "@/Components/Common/ItemCard/ParamsContent";

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
      <section className={styles.item__params}>
         <h3>Все характеристики</h3>
         <ParamsContent params={params} />
      </section>
   );
}
export default Params;
