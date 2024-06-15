import { FridgeDataInner } from "@/app/catalog/fridges/page";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import ParamsContent from "@/Components/Common/ItemCard/ParamsContent";

function Params({ el }: { el: FridgeDataInner }) {
   const params = [
      {
         title: "Наименование",
         param: "Холодильник",
      },
      {
         title: "Общий объём, л",
         param: el.literVol,
      },
      {
         title: "Объём морозильной камеры, л",
         param: el.freezeChamber,
      },
      {
         title: "Объём холодильной камеры, л",
         param: el.fridgeChamber,
      },
      {
         title: "Уровень шума, дБ",
         param: el.noiseLevel,
      },
      {
         title: "Размеры (ШхВхГ)",
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
