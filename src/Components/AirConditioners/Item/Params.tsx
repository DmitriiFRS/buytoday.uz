import { AircondDataInner, AircondDataModel } from "@/app/catalog/air-conditioners/[item]/page";
import ParamsContent from "@/Components/Common/ItemCard/ParamsContent";

type Props = {
   el: AircondDataInner;
   elInner: AircondDataModel;
};

function Params({ el, elInner }: Props) {
   const params = [
      {
         title: "Наименование",
         param: "Бытовой кондиционер",
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
         title: "Компрессор",
         param: el.compressor,
      },
      {
         title: "Холодопроизводительность Btu/h",
         param: elInner.coolingPowerBtu,
      },
      {
         title: "Холодопроизводительность kW",
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
         title: "Расход воздуха max. (m3/h)",
         param: elInner.airFlow,
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
   return <ParamsContent params={params} />;
}
export default Params;
