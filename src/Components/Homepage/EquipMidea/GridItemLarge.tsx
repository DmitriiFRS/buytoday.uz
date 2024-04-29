import styles from "../Homepage.module.scss";
import Image from "next/image";
type Props = {
   item: {
      title: string;
      img: any;
   };
};
function GridItemBig({ item }: Props) {
   return (
      <div className={styles.categories__gridLarge}>
         <div className={styles.categories__gridLarge__title}>
            <div>{item.title}</div>
         </div>
         <div className={styles.categories__gridLarge__img}>
            <Image src={item.img} alt={item.title} fill style={{ objectFit: "contain" }} />
         </div>
      </div>
   );
}
export default GridItemBig;
