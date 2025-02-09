import { getProductsWithPagination } from "@/fetch/getAllProducts";
import styles from "../../Components/testpage/s.module.scss";
import { vrfInner, VRFInnerBody } from "@/Components/Catalog/VrfInner/VrfInner.data";

const page = async () => {
     const sitemapLinks = vrfInner.flatMap((el: VRFInnerBody) =>
          el.models.map((model) => ({
               url: `https://buytoday.uz/catalog/vrf-inner/${el.url?.replace(/\s|\//g, "-").toLowerCase()}_${model.model?.replace(/\s|\//g, "-").toLowerCase()}`,
               lastModified: new Date(),
          }))
     );

     console.log(sitemapLinks);

     return <section className={styles.section}></section>;
};

export default page;
