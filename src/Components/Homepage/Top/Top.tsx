import styles from "../Homepage.module.scss";
import alba from "../../../../public/Img/Homepage/Top/Alba.png";
import col from "../../../../public/Img/Homepage/Top/new-col.png";
import nordic from "../../../../public/Img/Homepage/Top/nordic-2.png";
import breezeless from "../../../../public/Img/Homepage/Top/Breezeeless.png";
import Image from "next/image";
import Link from "next/link";
import fetchGraphql from "@/Functions/fetchGraphql";

const top = [
   {
      id: 0,
      title: "Бытовой кондиционер Nordic-12",
      category: "Бытовые кондиционеры",
      brand: "Midea",
      url: "/catalog/air-conditioners/",
      image: nordic,
   },
   {
      id: 1,
      title: "Бытовой кондиционер Alba-12",
      category: "Бытовые кондиционеры",
      brand: "Midea",
      url: "/catalog/air-conditioners/",
      image: alba,
   },
   {
      id: 2,
      title: "Бытовой кондиционер Breezeless-12",
      category: "Бытовые кондиционеры",
      brand: "Midea",
      url: "/catalog/air-conditioners/",
      image: breezeless,
   },
   {
      id: 3,
      title: "Колонный кондиционер FSTYAC-24",
      category: "Колонные кондиционеры",
      brand: "Midea",
      url: "/catalog/col-conditioners/",
      image: col,
   },
];

type TopData = {
   model: string;
   price: number;
   aream2: string;
}[];

async function Top() {
   const data = await fetchGraphql(`
         query {	
  airCondModelCollection(where: {sys: {id_in: ["3SBNJN08HwGadQurucWWeU", "4Q64QUs25mfVUoAw3BqJ9p", "2XLx9bxVgq34J7OAqKRhVz"]}}) {
    items {
      model
      price
      aream2
    }
  }
  semiCondModel(id: "4l30Bn7NJHDsSBmzON8qOE") {
    model
    price
    aream2
  }
   dollarValue(id: "1tU030J3VGI8BlTOgn7Sjk") {
      value
   }
}
      `);
   const concatedData: TopData = data.data.airCondModelCollection.items.concat(data.data.semiCondModel);
   const dollarValue = data.data.dollarValue.value;

   return (
      <section className={styles.top}>
         <div className="container">
            <h2 className={styles.top__title}>Хит продаж</h2>
            <div className={styles.top__cols}>
               {concatedData.map((el, index) => {
                  return (
                     <Link href={`${top[index].url}${el.model.replace(/\s|\//g, "-").toLowerCase()}`} className={styles.top__col} key={top[index].id}>
                        <div className={styles.top__img}>
                           <Image src={top[index].image} alt={el.model} fill style={{ objectFit: "contain" }} />
                        </div>
                        <div className={styles.top__colTitle}>
                           <div className={styles.top__category}>{top[index].category}</div>
                           <div className={styles.top__name}>{top[index].title}</div>
                        </div>
                        <div className={styles.top__params}>
                           <div className={styles.top__param}>
                              Бренд: <span>{top[index].brand}</span>
                           </div>
                           <div className={styles.top__param}>
                              Площадь: <span>{el.aream2} m²</span>
                           </div>
                        </div>
                        <div className={styles.top__price}>{(el.price * dollarValue).toLocaleString("en")} сум</div>
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
