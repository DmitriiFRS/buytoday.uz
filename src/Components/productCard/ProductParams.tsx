import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import styles from "../Aircond&SemiInd/Params.module.scss";

type Props = {
     model: AircondProductTypeModel;
};

function ProductParams({ model }: Props) {
     const paramsData = [
          {
               title: "Размер завесы (В см)",
               param: model.attributes.paramsWrapper?.aircond?.sizeCurtains || null,
          },
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
          {
               title: "Размер (Ш.В.Г)",
               param: model.attributes.paramsWrapper?.aircond?.fullSize || null,
          },
          {
               title: "Источник электропитания",
               param: model.attributes.paramsWrapper?.aircond?.powerSupply || null,
          },
          {
               title: "Температура на выходе",
               param: model.attributes.paramsWrapper?.aircond?.tempOutput || null,
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
               title: "Объем удаления частиц м3/час",
               param: model.attributes.paramsWrapper?.airPurifiers?.ParticleRemovalVol || null,
          },
          {
               title: "Объем формальдегида м3/час",
               param: model.attributes.paramsWrapper?.airPurifiers?.formaldehydeVol || null,
          },
          {
               title: "Уровень шума (дб)",
               param: model.attributes.paramsWrapper?.airPurifiers?.noise || null,
          },
          {
               title: "Размер (кг)",
               param: model.attributes.paramsWrapper?.airPurifiers?.weight || null,
          },
          {
               title: "Предлагаемый период замены фильтров",
               param: model.attributes.paramsWrapper?.airPurifiers?.filterReplacementPeriod || null,
          },
          {
               title: "Емкость бака (л)",
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
          {
               title: "Длина кабеля (м)",
               param: model.attributes.paramsWrapper?.airPurifiers?.cableLength || null,
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
          {
               title: "Уровень шума, дБ",
               param: model.attributes.paramsWrapper?.fridges?.noise || null,
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
               title: "Размеры (Ш.В.Г)",
               param: model.attributes.paramsWrapper?.boilers?.size || null,
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
               title: "Номинальное напряжение",
               param: model.attributes.paramsWrapper?.boilers?.nominalPower || null,
          },
          {
               title: "Максимальная теплопроизводительность",
               param: model.attributes.paramsWrapper?.boilers?.maxPerformance || null,
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
          //coolers
          {
               title: "Тип камеры сгорания",
               param: model.attributes.paramsWrapper?.coolers?.coilMaterial || null,
          },
          {
               title: "Температура горячей воды (°C)",
               param: model.attributes.paramsWrapper?.coolers?.hotWaterTemp || null,
          },
          {
               title: "Температура охлажденной воды (°C)",
               param: model.attributes.paramsWrapper?.coolers?.chilledWaterTemp || null,
          },
          {
               title: "Размер бака горячей воды (л)",
               param: model.attributes.paramsWrapper?.coolers?.hotWaterSize || null,
          },
          {
               title: "Размер бака холодной воды (л)",
               param: model.attributes.paramsWrapper?.coolers?.chilledWaterSize || null,
          },
          {
               title: "Тепловая мощность (W)",
               param: model.attributes.paramsWrapper?.coolers?.thermalCap || null,
          },
          {
               title: "Охлаждение (W)",
               param: model.attributes.paramsWrapper?.coolers?.cooling || null,
          },
          {
               title: "Размер (Ш.В.Г)",
               param: model.attributes.paramsWrapper?.coolers?.size || null,
          },
          //recups
          {
               title: "Мощность",
               param: model.attributes.paramsWrapper?.recups?.power || null,
          },
          {
               title: "Уровень шума (дБ)",
               param: model.attributes.paramsWrapper?.recups?.noise || null,
          },
          {
               title: "Размер Панели (Ш.В.Г)",
               param: model.attributes.paramsWrapper?.recups?.panelSize || null,
          },
          {
               title: "Объем Воздуха (м3/ч)",
               param: model.attributes.paramsWrapper?.recups?.airVolume || null,
          },
          //dehumids
          {
               title: "Электропитание",
               param: model.attributes.paramsWrapper?.dehumids?.powerSupply || null,
          },
          {
               title: "Потребление",
               param: model.attributes.paramsWrapper?.dehumids?.powerConsumption || null,
          },
          {
               title: "Емкость",
               param: model.attributes.paramsWrapper?.dehumids?.capacity || null,
          },
          {
               title: "Циркулируемый поток воздуха",
               param: model.attributes.paramsWrapper?.dehumids?.circAirFlow || null,
          },
          {
               title: "Хладагент",
               param: model.attributes.paramsWrapper?.dehumids?.coolant || null,
          },
          {
               title: "Размер",
               param: model.attributes.paramsWrapper?.dehumids?.size || null,
          },
          {
               title: "Общий вес",
               param: model.attributes.paramsWrapper?.dehumids?.weight || null,
          },
          {
               title: "Площадь применения (м2)",
               param: model.attributes.paramsWrapper?.dehumids?.m2 || null,
          },
          {
               title: "Производительность",
               param: model.attributes.paramsWrapper?.dehumids?.performance || null,
          },
          {
               title: "Дренаж",
               param: model.attributes.paramsWrapper?.dehumids?.drenage || null,
          },
          {
               title: "Рабочая температура (°C)",
               param: model.attributes.paramsWrapper?.dehumids?.workingTemp || null,
          },
          {
               title: "Уровень шума (дБ)",
               param: model.attributes.paramsWrapper?.dehumids?.noise || null,
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
