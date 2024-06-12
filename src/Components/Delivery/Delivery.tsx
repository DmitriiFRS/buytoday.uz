import styles from "./Delivery.module.scss";
import Image from "next/image";
import delivery from "../../../public/Img/Delivery/delivery_main.jpg";
import deliveryM from "../../../public/Img/Delivery/delivery_mobile.jpg";
import delivery1 from "../../../public/Img/Delivery/delivery1.webp";
import { TbTruckDelivery } from "react-icons/tb";
import { FaCity } from "react-icons/fa";
import { BsCashCoin } from "react-icons/bs";
import { GiPathDistance } from "react-icons/gi";

function Delivery() {
   return (
      <div className={styles.main}>
         <h2 className={styles.main__title}>При покупки товаров на нашем сайте мы осуществляем бесплатную доставку по городу Ташкент</h2>
         <div className={styles.main__img}>
            <Image src={delivery} alt="доставка" fill style={{ objectFit: "cover" }} />
         </div>
         <div className={styles.main__imgMobile}>
            <Image src={deliveryM} alt="доставка" fill style={{ objectFit: "cover" }} />
         </div>
         <div className={styles.main__conditions}>
            <h3 className={styles.main__conditions__title}>Перечень условий зказанных товаров через интернет-магазин:</h3>
            <div className={styles.main__conditions__body}>
               <div className={styles.main__conditions__img}>
                  <Image src={delivery1} alt="перечень условий" fill style={{ objectFit: "cover" }} />
               </div>
               <ul className={styles.main__conditions__list}>
                  <li className={styles.main__conditions__item}>
                     <TbTruckDelivery size={45} color="#000052" />
                     <div>Мы доставим Ваш товар в удобное для вас время , и свяжемся с Вами заблаговременно до прибытия по адресу доставки</div>
                  </li>
                  <li className={styles.main__conditions__item}>
                     <FaCity size={45} color="#000052" />
                     <div>Доставка осуществляется по всему Ташкенту , Дополнительную информацию можно узнать у наших продавцов-консультантов</div>
                  </li>
                  <li className={styles.main__conditions__item}>
                     <BsCashCoin size={45} color="#000052" />
                     <div>Мы попросим Вас оплатить товар и услуги согласно товарным чекам предварительно или непосредственно сотруднику службы доставки</div>
                  </li>
                  <li className={styles.main__conditions__item}>
                     <GiPathDistance size={45} color="#000052" />
                     <div>Доставка товара осуществляется при наличии подъездных путей по указанному в заказе адресу</div>
                  </li>
               </ul>
            </div>
         </div>
         <div className={styles.important}>
            <h3 className={styles.important__title}>
               <span>Важно!!</span> Просим обратить внимание на следующие моменты:
            </h3>
            <ul className={styles.important__list}>
               <li>Работы по установке – монтажу товара в услугу доставки не включены</li>
               <li>Мы доставим товар до входной двери квартиры, участка, офиса, в указанное Вами место, и предоставим гарантийный талон</li>
               <li>
                  Сотрудники службы доставки будут ожидать Вас в течение 30 минут, если в оговоренное время Вас не окажется по адресу доставки товара – мы будем
                  вынуждены перенести доставку
               </li>
               <li>
                  Если по адресу доставки товара действуют ограничения на въезд (пропускная система или платный въезд), Вам необходимо обеспечить получение
                  разрешения на въезд. В ином случае доставка возможна только до места платного или ограниченного въезда. Лестничные проходы и дверные проемы
                  должны быть свободны и позволять свободно занести товар в помещение в упаковке. В случае отсутствия возможности занести товар в квартиру,
                  офис, товар доставляется на месте, до которого удалось осуществить доставку
               </li>
               <li>
                  Включение и проверка работоспособности товара производится Вами без участия сотрудников Службы доставки. Перед включением техники рекомендуем
                  Вам ознакомиться с инструкцией по эксплуатации товара
               </li>
               <li>В случае отсутствия гарантийного талона или инструкции по эксплуатации товара Вы можете обратиться в Нашу службу поддержки клиентов</li>
               <li>Вы можете отказаться от приема товара, если Вас не устраивает внешний вид, комплектация товара</li>
            </ul>
         </div>
      </div>
   );
}
export default Delivery;
