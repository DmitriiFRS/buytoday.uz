import styles from "../Aircond&SemiInd/Params.module.scss";

type Props = {
     el: any;
     elInner: any;
};

function ProductParams({ el, elInner }: Props) {
     const paramsData = [
          {
               title: "Подключение",
               param: el.connect,
          },
          {
               title: "Тип двигателя",
               param: el.engineType,
          },
          {
               title: "Количество хладагента",
               param: el.fanQuantity,
          },
          {
               title: "Тип вентилятора",
               param: el.fanType,
          },
          {
               title: "Тип фреона",
               param: el.freonType,
          },
          {
               title: "Тип подключения",
               param: el.connectType,
          },
          {
               title: "Теплообменник",
               param: el.heatExchanger,
          },
          {
               title: "Тип управления",
               param: el.controlType,
          },
          {
               title: "Заправка маслом",
               param: el.oilType,
          },
          {
               title: "Компрессор",
               param: el.compressor,
          },
          {
               title: "Конденсатор: Расход воды m3/h",
               param: elInner.condenserWaterFlow,
          },
          {
               title: "Испаритель: Расход воды m3/h",
               param: elInner.evaporatorWaterFlow,
          },
          {
               title: "Испаритель: Подключение водяных трубок",
               param: elInner.evaporatorpipeConnect,
          },
          {
               title: "Конденсатор: Подключение водяных трубок",
               param: elInner.condenserpipeConnect,
          },
          {
               title: "Количество компрессоров",
               param: el.compressorQuantity,
          },
          {
               title: "Подключаемый внутренний блок",
               param: el.connectableIndoor,
          },
          {
               title: "Холодопроизводительность (kW)",
               param: elInner.coolingPower,
          },
          {
               title: "COP (Охлаждение)",
               param: elInner.coolingCop,
          },
          {
               title: "COP (Обогрев)",
               param: elInner.heatingCop,
          },
          {
               title: "IPLV",
               param: elInner.iplv,
          },
          {
               title: "Макс. ток (А)",
               param: elInner.maxPower,
          },
          {
               title: "Макс. пусковой ток (А)",
               param: elInner.maxPowerStart,
          },
          {
               title: "Мощность двигателя (kW)",
               param: elInner.motorPower,
          },
          {
               title: "Потребляемая мощность (Охлаждение, kW)",
               param: elInner.coolingEnergyConsumption,
          },
          {
               title: "Давление в сети (Охлаждение)",
               param: elInner.coolingMainsPressure,
          },
          {
               title: "Давление в сети (Обогрев)",
               param: elInner.heatingMainsPressure,
          },
          {
               title: "Расход воздуха max. (m3/h)",
               param: elInner.airFlowm3h,
          },
          {
               title: "Количество фреона, кг",
               param: elInner.freonQuantity,
          },
          {
               title: "Объем жидкости (Л)",
               param: elInner.waterVol,
          },
          {
               title: "Расход воздуха max. (CFM)",
               param: elInner.airFlowcfm,
          },
          {
               title: "Потребляемая мощность",
               param: elInner.powerConsumption,
          },
          {
               title: "Количество компрессоров",
               param: elInner.engineNum,
          },
          {
               title: "Количество вентиляторов",
               param: elInner.fanNum,
          },
          {
               title: "Теплопроизводительность (kW)",
               param: elInner.heatingPower,
          },
          {
               title: "Потребляемая мощность (Обогрев, kW)",
               param: elInner.heatingEnergyConsumption,
          },
          {
               title: "COP",
               param: elInner.cop,
          },
          {
               title: "EER",
               param: elInner.eer,
          },
          {
               title: "Расход воздуха (m3/h)",
               param: elInner.airFlow,
          },
          {
               title: "Макс. кол-во подключаемых внутренних блоков",
               param: elInner.maxInnerBlocks,
          },
          {
               title: "Уровень шума (dB)",
               param: elInner.noiseLevel,
          },
          {
               title: "Размеры (Д×В×Ш)",
               param: elInner.size,
          },
          {
               title: "Размер упаковки (Д×В×Ш)",
               param: elInner.packageSize,
          },
          {
               title: "Масса (кг)",
               param: elInner.weight,
          },
          {
               title: "Подключение труб (жидкость/газ)",
               param: elInner.pipeConnect,
          },
          {
               title: "Дренаж",
               param: elInner.drenage,
          },
          {
               title: "Дренаж",
               param: elInner.drainage,
          },
          {
               title: "Статическое давление",
               param: elInner.staticPressure,
          },
          {
               title: "Размер панели (Д×В×Ш)",
               param: elInner.panelSize,
          },
          {
               title: "Размер упаковки панели (ДxВxШ)",
               param: elInner.panelPackageSize,
          },
          {
               title: "Вес панели (кг)",
               param: elInner.panelWeight,
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
