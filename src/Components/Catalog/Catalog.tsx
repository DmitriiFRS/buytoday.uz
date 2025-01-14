import styles from "./Catalog.module.scss";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

type Items = {
     id: number;
     title: string;
     img: StaticImageData;
     href: string;
};

function Catalog({ items }: { items: Items[] }) {
     return (
          <div className={styles.grid}>
               {items.map((el) => {
                    return (
                         <Link href={el.href} className={styles.grid__item} key={el.id}>
                              <div className={styles.grid__title}>{el.title}</div>
                              <div className={styles.grid__img}>
                                   <Image src={el.img} alt={el.title} fill style={{ objectFit: "contain" }} />
                              </div>
                         </Link>
                    );
               })}
          </div>
     );
}
export default Catalog;
