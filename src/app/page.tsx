import styles from "./page.module.scss";
import "./globals.scss";
import Banners from "@/Components/Homepage/Banners";

export default function Home() {
   return (
      <main className={`${styles.main} main`}>
         <Banners />
      </main>
   );
}
