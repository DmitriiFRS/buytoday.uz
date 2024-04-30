import styles from "./page.module.scss";
import "./globals.scss";
import Banners from "@/Components/Homepage/Banners";
import EquipMidea from "@/Components/Homepage/EquipMidea/EquipMidea";
import TopSales from "@/Components/Homepage/Topsales/TopSales";

export default function Home() {
   return (
      <>
         <Banners />
         <EquipMidea />
         <TopSales />
      </>
   );
}
