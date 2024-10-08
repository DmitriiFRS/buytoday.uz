import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import styles from "../Aircond&SemiInd/Params.module.scss";
import { title } from "process";

type Params = {
   title: string;
   param: string | null | number;
};

type Props = {
   model: AircondProductTypeModel;
};

function ProductParams({ model }: Props) {
   const paramsData = [
      {
         title: "Тип компрессора",
         param: model.attributes.product?.data.attributes.compressorTypeConds.data.attributes.title || null,
      },
      {
         title: "Диапазон температур",
         param: model.attributes.product?.data.attributes.temperatureRange || null,
      },
      {
         title: "Компрессор",
         param: model.attributes.product?.data.attributes.compressorTypeConds.data.attributes.title || null,
      },
      {
         title: "Холодопроизводительность Btu/h",
         param: model.attributes.coolingBtu || null,
      },
      {
         title: "Холодопроизводительность kW",
         param: model.attributes.coolingKw || null,
      },
      {
         title: "Теплопроизводительность Btu/h",
         param: model.attributes.heatingBtu || null,
      },
      {
         title: "Теплопроизводительность kW",
         param: model.attributes.heatingKw || null,
      },
      {
         title: "Расход воздуха max. (m3/h)",
         param: model.attributes.airConsumption || null,
      },
      {
         title: "Обслуживаемая площадь (m2)",
         param: model.attributes.m2Area || null,
      },
      {
         title: "Обслуживаемый объем (m3)",
         param: model.attributes.m3Area || null,
      },
      {
         title: "Размер внутр. блока (Ш.В.Г)",
         param: model.attributes.innerBlockSize || null,
      },
      {
         title: "Размер внеш. блока (Ш.В.Г)",
         param: model.attributes.outerBlockSize || null,
      },
      {
         title: "Расход эл-ва (kW) от",
         param: model.attributes.powerConsumption || null,
      },
      {
         title: "Кол-во / марка фреона (g)",
         param: model.attributes.freon || null,
      },
      {
         title: "Уровень шума внутр.бл.(dB) от",
         param: model.attributes.innerBlockNoise || null,
      },
      {
         title: "Уровень шума внеш.бл.(dB)",
         param: model.attributes.outerBlockNoise || null,
      },
      {
         title: "Вес внут. блока (kg)",
         param: model.attributes.innerBlockWeight || null,
      },
      {
         title: "Вес внеш. блока (kg)",
         param: model.attributes.outerBlockWeight || null,
      },
      {
         title: "Длина трассы (m)",
         param: model.attributes.routeLength || null,
      },
   ];
   return (
      <ul className={styles.params}>
         {paramsData.map((item, index) => {
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
export default ProductParams;
/*{params.map((item, index) => {
            return item.param ? (
               <li className={styles.params__item} key={index}>
                  <span className={styles.params__title}>{item.title}</span>
                  <span className={styles.params__separator}></span>
                  <div className={styles.params__param}>{item.param}</div>
               </li>
            ) : (
               ""
            );
         })}*/
