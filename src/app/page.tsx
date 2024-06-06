import "./globals.scss";
import Banners from "@/Components/Homepage/Banners";
import Catalog from "@/Components/Homepage/Catalog/Catalog";
import TopSales from "../Components/Homepage/Top/Top";
import Info from "@/Components/Homepage/Info/Info";

export default function Home() {
   return (
      <>
         <Banners />
         <Catalog />
         <TopSales />
         <Info />
      </>
   );
}
