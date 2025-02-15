import { atomInner } from "@/Data/atomInner.data";
import { atomOuter } from "@/Data/atomOuter.data";
import Main from "@/Components/Prom/VrfInnerItem/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Prom/Prom.module.scss";

export async function generateMetadata({ params }: { params: { item: string } }) {
     const concatedItems = [...atomOuter, ...atomInner];
     const product = concatedItems.filter((el) => {
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
     const concatedItems = [...atomOuter, ...atomInner];
     return (
          <div className={styles.prom}>
               <div className="container">
                    <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
                    <Main outerItems={concatedItems as any} params={params} category="vrf-atom" />
               </div>
          </div>
     );
}
export default page;
