import "./globals.scss";
import Banners from "@/Components/Homepage/Banners";
import Catalog from "@/Components/Homepage/Catalog/Catalog";
import TopSales from "../Components/Homepage/Top/Top";

export default function Home() {
   return (
      <>
         <Banners />

         <TopSales />
      </>
   );
}
//<Catalog />
