import styles from "../Homepage.module.scss";
import { TbTruckDelivery } from "react-icons/tb";
import { IoShieldCheckmark } from "react-icons/io5";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdPriceCheck } from "react-icons/md";

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
      title: "Гарантия возврата денег",
      subtitle:
         "Если по каким-либо причинам вы останетесь недовольны нами – на любом этапе вплоть до установки – мы вернем вам деньги. Без лишних слов и вопросов",
      icon: <FaMoneyBillWave />,
   },
   {
      id: 3,
      title: "Отличное соотношение цены и качества",
      subtitle: "У нас не самые дешевые цены. У нас лучшее соотношение цены и качества. Обращаясь к нам, вы точно знаете, за что платите",
      icon: <MdPriceCheck />,
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
