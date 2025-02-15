import { chillers } from "@/Components/Catalog/Chillers/Chillers.data";
import Main from "@/Components/Prom/VrfInnerItem/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Prom/Prom.module.scss";

export async function generateMetadata({ params }: { params: { item: string } }) {
     const product = chillers.filter((el) => {
          if (el.models.find((item) => el.url + "_" + item.model.replace(/\s|\//g, "-").toLowerCase() === params.item)) {
               return el;
          }
     });
     return {
          title: `${product[0].name}`,
          description: `Купить ${product[0].name} от компании ${product[0].company}`,
          openGraph: {
               type: "website",
               locale: "ru_RU",
               siteName: "Buytoday",
               title: `${product[0].name}`,
               description: `Купить ${product[0].name} от компании ${product[0].company}`,
          },
     };
}

function page({ params }: { params: { item: string } }) {
     return (
          <div className={styles.prom}>
               <div className="container">
                    <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
                    <Main outerItems={chillers as any} params={params} category="chillers" />
               </div>
          </div>
     );
}
export default page;
