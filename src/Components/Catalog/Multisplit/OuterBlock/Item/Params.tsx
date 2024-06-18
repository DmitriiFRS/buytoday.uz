import ParamsContent from "@/Components/Common/ItemCard/ParamsContent";
import { MultiOuterCollection } from "@/app/catalog/multisplit-outer/page";
import styles from "../../../../Aircond&SemiInd/ItemAircondSemi.module.scss";

function Params({ el }: { el: MultiOuterCollection }) {
   const params = [
      {
         title: "Наименование",
         param: "Мути-сплит система",
      },
      {
         title: "Источник питания",
         param: el.connect,
      },
      {
         title: "Охлаждение Btu/h",
         param: el.coolingCapacity,
      },
      {
         title: "Охлаждение (W) Вход",
         param: el.coolingOutput,
      },
      {
         title: "Охлаждение (A) номинальный ток",
         param: el.coolingAmperage,
      },
      {
         title: "EER",
         param: el.eer,
      },
      {
         title: "Обогрев Btu/h",
         param: el.heatingCapacity,
      },
      {
         title: "Обогрев (W) Вход",
         param: el.heatingOutput,
      },
      {
         title: "Обогрев (A) номинальный ток",
         param: el.heatingAmperage,
      },
      {
         title: "COP",
         param: el.cop,
      },
      {
         title: "Расход наружного воздуха m3/h",
         param: el.airFlow,
      },
      {
         title: "Размеры (ШxГxВ)",
         param: el.size,
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
