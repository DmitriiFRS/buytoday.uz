import { SemiIndDataModel } from "@/app/catalog/col-conditioners/[item]/page";
import { SemiIndDataInner } from "@/app/catalog/col-conditioners/[item]/page";
import ParamsContent from "@/Components/Common/ItemCard/ParamsContent";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";

function Params({ el, elInner }: { el: SemiIndDataInner; elInner: SemiIndDataModel }) {
   const params = [
      {
         title: "Наименование",
         param: el.type + " " + "кондиционер",
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
         title: "Холодопроизводительность Btu/h",
         param: elInner.coolingPowerBtu,
      },
      {
         title: "Холодопроизводтельность kW",
         param: elInner.coolingPowerKw,
      },
      {
         title: "Теплопроизводительность Btu/h",
         param: elInner.heatPowerBtu,
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
         title: "Расход воздуха max. (m3/h)",
         param: elInner.airFlow,
      },
      {
         title: "Размер внутр. блока (Ш.В.Г)",
         param: elInner.blockSize,
      },
      {
         title: "Размер внеш. блока (Ш.В.Г)",
         param: elInner.outerBlockSize,
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
         title: "Уровень шума внеш.бл.(dB)",
         param: elInner.outerNoise,
      },
      {
         title: "Вес внут. блока (kg)",
         param: elInner.innerWeight,
      },
      {
         title: "Вес внеш. блока (kg)",
         param: elInner.outerWeight,
      },
      {
         title: "Длина трассы (m)",
         param: elInner.routeLength,
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
