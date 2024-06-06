import styles from "../Homepage.module.scss";
import alba from "../../../../public/Img/Homepage/Top/Alba.png";
import col from "../../../../public/Img/Homepage/Top/new-col.png";
import Image from "next/image";
import Link from "next/link";

const top = [
   {
      id: 0,
      title: "Бытовой кондиционер Alba 07",
      category: "Бытовые кондиционеры",
      aream2: "20 m²",
      brand: "Midea",
      price: 1800000,
      url: "/catalog/air-conditioners/alba_alba-07",
      image: alba,
   },
   {
      id: 1,
      title: "Бытовой кондиционер Alba 12",
      category: "Бытовые кондиционеры",
      aream2: "35 m²",
      brand: "Midea",
      price: 5000000,
      url: "/catalog/air-conditioners/alba_alba-12",
      image: alba,
   },
   {
      id: 2,
      title: "Колонный кондиционер FSTYAC 24",
      category: "Колонные кондиционеры",
      aream2: "80 m²",
      brand: "Midea",
      price: 9000000,
      url: "/catalog/col-conditioners/col-split-fstyac_fstyac-24",
      image: col,
   },
   {
      id: 3,
      title: "Бытовой кондиционер Breezeless 12",
      category: "Бытовые кондиционеры",
      aream2: "40 m²",
      brand: "Midea",
      price: 1500000,
      url: "/catalog/air-conditioners/breezeless_elegant-12",
      image: alba,
   },
];

function Top() {
   return (
      <section className={styles.top}>
         <div className="container">
            <h2 className={styles.top__title}>Хит продаж</h2>
            <div className={styles.top__cols}>
               {top.map((el) => {
                  return (
                     <Link href={el.url} className={styles.top__col} key={el.id}>
                        <div className={styles.top__img}>
                           <Image src={el.image} alt={el.title} fill style={{ objectFit: "contain" }} />
                        </div>
                        <div className={styles.top__colTitle}>
                           <div className={styles.top__category}>{el.category}</div>
                           <div className={styles.top__name}>{el.title}</div>
                        </div>
                        <div className={styles.top__params}>
                           <div className={styles.top__param}>
                              Бренд: <span>{el.brand}</span>
                           </div>
                           <div className={styles.top__param}>
                              Площадь: <span>{el.aream2}</span>
                           </div>
                        </div>
                        <div className={styles.top__price}>{el.price.toLocaleString("en")} сум</div>
                        <div className={styles.top__btn}>Подробнее</div>
                     </Link>
                  );
               })}
            </div>
         </div>
      </section>
   );
}
export default Top;
