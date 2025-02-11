import "./globals.scss";
import Banners from "@/Components/Homepage/Banners";
import TopSales from "../Components/Homepage/Top/Top";
import Info from "@/Components/Homepage/Info/Info";
import Catalog from "@/ComponentsNew/Homepage/Catalog/Catalog";
import Promotions from "@/Components/Homepage/Promotions/Promotions";

export default function Home() {
     return (
          <>
               <Banners />
               <Promotions />
               <Catalog />
               <TopSales />
               <Info />
          </>
     );
}
