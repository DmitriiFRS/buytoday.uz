import { MultiInnerDataModel, MultiInnerMain } from "@/app/catalog/multisplit-inner/page";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import ParamsContent from "@/Components/Common/ItemCard/ParamsContent";

type Props = {
   el: MultiInnerMain;
   elInner: MultiInnerDataModel;
};

function Params({ el, elInner }: Props) {
   const params = [
      {
         title: "Наименование",
         param: "Мультисплит-система",
      },
      {
         title: "Инверторный",
         param: el.isInverter ? "Да" : "Нет",
      },
      {
         title: "Диапазон температур",
         param: el.temperatureRange,
      },
      {
         title: "Холодопроизводтельность kW",
         param: elInner.coolingPowerKw,
      },
      {
         title: "Теплопроизводительность kW",
         param: elInner.heatPowerKw,
      },
      {
         title: "Обслуживаемая площадь (m2)",
         param: elInner.aream2,
      },
      {
         title: "Обслуживаемый объем (m3)",
         param: elInner.aream3,
      },
      {
         title: "Размер внутр. блока (Ш.В.Г)",
         param: elInner.blockSize,
      },
      {
         title: "Расход эл-ва (kW) от",
         param: elInner.energyOutput,
      },
      {
         title: "Кол-во / марка фреона (g)",
         param: elInner.freonQuantity,
      },
      {
         title: "Уровень шума внутр.бл.(dB) от",
         param: elInner.innerNoise,
      },
      {
         title: "Вес внут. блока (kg)",
         param: elInner.innerWeight,
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
