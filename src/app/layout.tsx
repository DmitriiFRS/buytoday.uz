import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./output.css";
import "./globals.scss";

import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { ReduxAppProvider } from "@/Redux/ReduxAppProvider";
import CallButton from "@/Components/Common/CallButton/CallButton";
import BottomNavbar from "@/Components/BottomNavbar/BottomNavbar";
import NextTopLoader from "nextjs-toploader";
import AllScripts from "@/Components/AllScripts";
import AllScripts2 from "@/Components/AllScripts2";

const rubik = Rubik({ subsets: ["latin", "cyrillic-ext"] });

export const metadata: Metadata = {
     title: `Buytoday - интернет магазин кондиционеров, электроники и бытовой техники`,
     description: "Дешевые цены на кондиционеры, бытовую технику и электронику в Ташкенте, гарантия качества, большой выбор товаров",
     keywords: ["интернет-магазин", "скидки", "выгодно", "Ташкент", "Узбекистан"],
     openGraph: {
          type: "website",
          locale: "ru_RU",
          url: "https://buytoday.uz",
          siteName: "Buytoday",
          title: "Buytoday - интернет магазин кондиционеров, электроники и бытовой техники",
          description: "Дешевые цены на кондиционеры, бытовую технику и электронику в Ташкенте, гарантия качества, большой выбор товаров",
     },
};

export default function RootLayout({
     children,
}: Readonly<{
     children: React.ReactNode;
}>) {
     return (
          <html lang="ru">
               <ReduxAppProvider>
                    <body className={rubik.className}>
                         <AllScripts2 />
                         <NextTopLoader color="#769AFF" initialPosition={0.08} crawlSpeed={200} height={2} showSpinner={false} shadow="0 0 10px #769AFF,0 0 5px #769AFF" />
                         <div className="wrapper">
                              <Header />
                              <main className="main">{children}</main>
                              <Footer />
                              <CallButton />
                              <BottomNavbar />
                         </div>
                         <AllScripts />
                    </body>
               </ReduxAppProvider>
          </html>
     );
}
