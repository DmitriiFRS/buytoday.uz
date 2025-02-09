import { getProductsWithPagination } from "@/fetch/getAllProducts";
import styles from "../../Components/testpage/s.module.scss";

const page = async () => {
     const data = await getProductsWithPagination();
     return (
          <section className={styles.section}>
               {data.map((el: any, index: number) => {
                    return <div key={index}>{el.attributes.slug}</div>;
               })}
          </section>
     );
};

export default page;
