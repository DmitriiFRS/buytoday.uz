import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Service/Service.module.scss";
import Service from "@/Components/Service/Service";

export const metadata = {
   title: `Сервис и услуги | ${process.env.BRAND}`,
   description: "Установка кондиционеров, обслуживание и ремонт техники, недорого и качественно",
   keywords: ["услуги", "установка", "обслуживание", "сервис"],
};

function page() {
   return (
      <section className={styles.service}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Service />
         </div>
      </section>
   );
}
export default page;
