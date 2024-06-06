import styles from "../Homepage.module.scss";
import aircond from "../../../../public/Img/Homepage/Catalog/aircond.png";
import Image from "next/image";
import banner from "../../../../public/Img/Homepage/Catalog/apple.jpg";

const catalog = [
   {
      id: 0,
      title: "",
      img: banner,
      className: styles.catalog__grid__aircond,
   },
   {
      id: 1,
      title: "Полупромышленные сплит-системы",
      img: aircond,
      className: styles.catalog__grid__semi,
   },
   {
      id: 2,
      title: "Мультисплит-системы",
      img: aircond,
      className: styles.catalog__grid__multi,
   },
   {
      id: 3,
      title: "VRF-Системы",
      img: aircond,
      className: styles.catalog__grid__vrf,
   },
   {
      id: 4,
      title: "Чиллеры",
      img: aircond,
      className: styles.catalog__grid__chillers,
   },
   {
      id: 5,
      title: "Холодильники",
      img: aircond,
      className: styles.catalog__grid__fridges,
   },
   {
      id: 6,
      title: "Тест",
      img: aircond,
      className: styles.catalog__grid__test,
   },
   {
      id: 7,
      title: "Тест",
      img: aircond,
      className: styles.catalog__grid__test,
   },
   {
      id: 8,
      title: "Тест",
      img: aircond,
      className: styles.catalog__grid__test,
   },
   {
      id: 9,
      title: "Тест",
      img: aircond,
      className: styles.catalog__grid__test,
   },
   {
      id: 10,
      title: "Тест",
      img: aircond,
      className: styles.catalog__grid__test,
   },
];

function Grid() {
   return (
      <div className={styles.catalog__grid}>
         {catalog.map((el, index) => {
            return (
               <div className={`${styles.catalog__grid__item} ${el.className}`} key={el.id}>
                  {index === 0 ? (
                     <div className={styles.catalog__grid__banner}>
                        <Image src={el.img} alt={el.title} fill style={{ objectFit: "cover" }} />
                     </div>
                  ) : (
                     <div className={styles.catalog__grid__img}>
                        <Image src={el.img} alt={el.title} fill style={{ objectFit: "contain" }} />
                     </div>
                  )}

                  <div className={styles.catalog__grid__title}>
                     <div>{el.title}</div>
                  </div>
               </div>
            );
         })}
      </div>
   );
}
export default Grid;
