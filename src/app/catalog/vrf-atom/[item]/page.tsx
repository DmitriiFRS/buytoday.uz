import { atomInner } from "@/Data/atomInner.data";
import { atomOuter } from "@/Data/atomOuter.data";
import Main from "@/Components/Prom/Atom/Main";
import NextBreadcrumb from "@/Components/Utilities/Breadcrumbs";
import styles from "@/Components/Prom/Prom.module.scss";

function page({ params }: { params: { item: string } }) {
   return (
      <div className={styles.prom}>
         <div className="container">
            <NextBreadcrumb homeElement={"Главная"} separator={"/"} />
            <Main outerAtom={atomOuter} innerAtom={atomInner} params={params} />
         </div>
      </div>
   );
}
export default page;
