import styles from "../Homepage.module.scss";
import Image from "next/image";

type Props = {
   item: {
      title: string;
      img: any;
   };
};

function GridItemSmall({ item }: Props) {
   return (
      <div className={styles.categories__gridSmall}>
         <div className={styles.categories__gridSmall__title}>{item.title}</div>
         <div className={styles.categories__gridSmall__img}>
            <Image src={item.img} alt={item.title} fill style={{ objectFit: "contain" }} />
         </div>
      </div>
   );
}
export default GridItemSmall;
