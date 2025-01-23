import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import styles from "../Aircond&SemiInd/Params.module.scss";

type Props = {
     model: AircondProductTypeModel;
};

function ProductParams({ model }: Props) {
     const paramsData = [
          {
               title: "Тип компрессора",
               param: model.attributes.paramsWrapper?.aircond?.product?.data.attributes.compressorTypeConds?.data?.attributes.title || null,
          },
          {
               title: "Диапазон температур",
               param: model.attributes.paramsWrapper?.aircond?.product?.data.attributes.temperatureRange || null,
          },
          {
               title: "Холодопроизводительность Btu/h",
               param: model.attributes.paramsWrapper?.aircond?.coolingBtu || null,
          },
          {
               title: "Холодопроизводительность kW",
               param: model.attributes.paramsWrapper?.aircond?.coolingKw || null,
          },
          {
               title: "Теплопроизводительность Btu/h",
               param: model.attributes.paramsWrapper?.aircond?.heatingBtu || null,
          },
          {
               title: "Теплопроизводительность kW",
               param: model.attributes.paramsWrapper?.aircond?.heatingKw || null,
          },
          {
               title: "Расход воздуха max. (m3/h)",
               param: model.attributes.paramsWrapper?.aircond?.airComsumption || null,
          },
          {
               title: "Обслуживаемая площадь (m2)",
               param: model.attributes.paramsWrapper?.aircond?.m2Area || null,
          },
          {
               title: "Обслуживаемый объем (m3)",
               param: model.attributes.paramsWrapper?.aircond?.m3Area || null,
          },
          {
               title: "Размер внутр. блока (Ш.В.Г)",
               param: model.attributes.paramsWrapper?.aircond?.innerBlockSize || null,
          },
          {
               title: "Размер внеш. блока (Ш.В.Г)",
               param: model.attributes.paramsWrapper?.aircond?.outerBlockSize || null,
          },
          {
               title: "Расход эл-ва (kW) от",
               param: model.attributes.paramsWrapper?.aircond?.powerConsumption || null,
          },
          {
               title: "Кол-во / марка фреона (g)",
               param: model.attributes.paramsWrapper?.aircond?.freon || null,
          },
          {
               title: "Уровень шума внутр.бл.(dB) от",
               param: model.attributes.paramsWrapper?.aircond?.innerBlockNoise || null,
          },
          {
               title: "Уровень шума внеш.бл.(dB)",
               param: model.attributes.paramsWrapper?.aircond?.outerBlockNoise || null,
          },
          {
               title: "Вес внут. блока (kg)",
               param: model.attributes.paramsWrapper?.aircond?.innerBlockWeight || null,
          },
          {
               title: "Вес внеш. блока (kg)",
               param: model.attributes.paramsWrapper?.aircond?.outerBlockWeight || null,
          },
          {
               title: "Длина трассы (m)",
               param: model.attributes.paramsWrapper?.aircond?.routeLength || null,
          },
          //air purifiers
          {
               title: "Номинальное напряжение",
               param: model.attributes.paramsWrapper?.airPurifiers?.voltage || null,
          },
          {
               title: "Номинальная частота",
               param: model.attributes.paramsWrapper?.airPurifiers?.nominalFrequency || null,
          },
          {
               title: "Номинальная мощность",
               param: model.attributes.paramsWrapper?.airPurifiers?.nominalPower || null,
          },
          {
               title: "Концентрация анионов",
               param: model.attributes.paramsWrapper?.airPurifiers?.anions || null,
          },
          {
               title: "Объем удаления частиц",
               param: model.attributes.paramsWrapper?.airPurifiers?.ParticleRemovalVol || null,
          },
          {
               title: "Объем формальдегида",
               param: model.attributes.paramsWrapper?.airPurifiers?.formaldehydeVol || null,
          },
          {
               title: "Предлагаемый период замены фильтров",
               param: model.attributes.paramsWrapper?.airPurifiers?.filterReplacementPeriod || null,
          },
          {
               title: "Емкость бака",
               param: model.attributes.paramsWrapper?.airPurifiers?.tankCapacity || null,
          },
          {
               title: "Максимальный объем распыления",
               param: model.attributes.paramsWrapper?.airPurifiers?.maximumSprayVolume || null,
          },
          {
               title: "Cтепень колебаний",
               param: model.attributes.paramsWrapper?.airPurifiers?.oscillationDegree || null,
          },
          {
               title: "Cкорость двигателя",
               param: model.attributes.paramsWrapper?.airPurifiers?.engineSpeed || null,
          },
          {
               title: "Cкорость воздуха",
               param: model.attributes.paramsWrapper?.airPurifiers?.airVelocity || null,
          },
          //multi outer
          {
               title: "Источник питания",
               param: model.attributes.paramsWrapper?.multiOuter?.powerSupply || null,
          },
          {
               title: "Охлаждение (A) номинальный ток",
               param: model.attributes.paramsWrapper?.multiOuter?.coolingAmperage || null,
          },
          {
               title: "ERR",
               param: model.attributes.paramsWrapper?.multiOuter?.err || null,
          },
          {
               title: "Обогрев (A) номинальный ток",
               param: model.attributes.paramsWrapper?.multiOuter?.heatingAmperage || null,
          },
          {
               title: "COP",
               param: model.attributes.paramsWrapper?.multiOuter?.cop || null,
          },
          //fridges
          {
               title: "Общий объём, л",
               param: model.attributes.paramsWrapper?.fridges?.valueL || null,
          },
          {
               title: "Объём морозильной камеры, л",
               param: model.attributes.paramsWrapper?.fridges?.freezerCapacity || null,
          },
          {
               title: "Объём холодильной камеры, л",
               param: model.attributes.paramsWrapper?.fridges?.coldRoomValue || null,
          },
          //wash
          {
               title: "Сушка",
               param: model.attributes.dry.data?.attributes.title || null,
          },
          {
               title: "Вместимость, кг",
               param: model.attributes.paramsWrapper?.wash?.capacity || null,
          },
          {
               title: "Количество программ",
               param: model.attributes.paramsWrapper?.wash?.programNums || null,
          },
          {
               title: "Скорость отжима, об/мин",
               param: model.attributes.paramsWrapper?.wash?.rpm || null,
          },
          //boilers
          {
               title: "Производительность max",
               param: model.attributes.performance.data?.attributes.title || null,
          },
          {
               title: "Производительность min",
               param: model.attributes.paramsWrapper?.boilers?.performanceMin || null,
          },
          {
               title: "Источник нагрева",
               param: model.attributes.paramsWrapper?.boilers?.heatingSource || null,
          },
          {
               title: "Рабочее давление газа",
               param: model.attributes.paramsWrapper?.boilers?.gasWorkingPressure || null,
          },
          {
               title: "КПД",
               param: model.attributes.paramsWrapper?.boilers?.kpd || null,
          },
          {
               title: "Рабочий диапазон температур (отопление)",
               param: model.attributes.paramsWrapper?.boilers?.heatingTemperatureRange || null,
          },
          {
               title: "Рабочий диапазон температур (Горячая вода)",
               param: model.attributes.paramsWrapper?.boilers?.hotWaterTemperatureRange || null,
          },
          {
               title: "Рабочее давление",
               param: model.attributes.paramsWrapper?.boilers?.workingPressure || null,
          },
          {
               title: "Объем расширительного бака",
               param: model.attributes.paramsWrapper?.boilers?.expansionTankVolume || null,
          },
          {
               title: "Горячая вода при t =25 C (литр/мин.)",
               param: model.attributes.paramsWrapper?.boilers?.water25LitersMin || null,
          },
          {
               title: "Горячая вода при t =30 C (литр/мин.)",
               param: model.attributes.paramsWrapper?.boilers?.water30LitersMin || null,
          },
          {
               title: "Максимальное/Минимальное давление газа",
               param: model.attributes.paramsWrapper?.boilers?.maxminGasPressure || null,
          },
          {
               title: "Подача кислорода",
               param: model.attributes.paramsWrapper?.boilers?.oxygenSupply || null,
          },
          {
               title: "Расход газа макс./мин. Nm3/h",
               param: model.attributes.paramsWrapper?.boilers?.gasFlowRateMaxMin || null,
          },
          {
               title: "Тип камеры сгорания",
               param: model.attributes.paramsWrapper?.boilers?.CombustionChamberType || null,
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
                    ) : null;
               })}
          </ul>
     );
}
export default ProductParams;
