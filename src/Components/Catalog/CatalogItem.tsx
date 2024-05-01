import { ListInner } from "./Data/Catalog.data";
import styles from "./Catalog.module.scss";
import Link from "next/link";
import Image from "next/image";

type Props = {
   el: ListInner;
};

function CatalogItem({ el }: Props) {
   return (
      <Link href={`catalog/${el.href}`} className={styles.catalog__item}>
         <div className={styles.catalog__item__title}>{el.title}</div>
         <div className={styles.catalog__item__img}>
            <Image src={el.img} alt={el.title} fill style={{ objectFit: "contain" }} />
         </div>
      </Link>
   );
}
export default CatalogItem;
