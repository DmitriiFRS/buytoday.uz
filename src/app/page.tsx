import "./globals.scss";
import Banners from "@/Components/Homepage/Banners";
import TopSales from "../Components/Homepage/Top/Top";
import Info from "@/Components/Homepage/Info/Info";
import Catalog from "@/ComponentsNew/Homepage/Catalog/Catalog";
import Promotions from "@/Components/Homepage/Promotions/Promotions";
import Hero from "@/Components/Homepage/Hero/Hero";

export default function Home() {
     return (
          <>
               <Hero />
               <Promotions />
               <Catalog />
               <TopSales />
               <Info />
          </>
     );
}
