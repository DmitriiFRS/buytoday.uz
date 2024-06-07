import styles from "../Homepage.module.scss";
import { TbTruckDelivery } from "react-icons/tb";
import { IoShieldCheckmark } from "react-icons/io5";

const col = [
   {
      id: 0,
      title: "Бесплатная доствка",
      subtitle: "Бесплатная доставка по г. Ташкент",
      icon: <TbTruckDelivery />,
   },
   {
      id: 1,
      title: "Гарантия на товары",
      subtitle: "Бесплатное гарантийное обслуживание на большинство товаров",
      icon: <IoShieldCheckmark />,
   },
   {
      id: 2,
      title: "Бесплатная доствка",
      subtitle: "Бесплатная доставка по г. Ташкент",
      icon: <TbTruckDelivery />,
   },
   {
      id: 3,
      title: "Бесплатная доствка",
      subtitle: "Бесплатная доставка по г. Ташкент",
      icon: <TbTruckDelivery />,
   },
];

function Info() {
   return (
      <section className={styles.info}>
         <div className="container">
            <ul className={styles.info__list}>
               {col.map((el) => {
                  return (
                     <li key={el.id} className={styles.info__item}>
                        <div className={styles.info__icon}>{el.icon}</div>
                        <div className={styles.info__title}>
                           <div>{el.title}</div>
                        </div>
                        <div className={styles.info__subtitle}>
                           <div>{el.subtitle}</div>
                        </div>
                     </li>
                  );
               })}
            </ul>
         </div>
      </section>
   );
}
export default Info;
