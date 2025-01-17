import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.scss";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { ReduxAppProvider } from "@/Redux/ReduxAppProvider";
import CallButton from "@/Components/Common/CallButton/CallButton";

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
                         <div className="wrapper">
                              <Header />
                              <main className="main">{children}</main>
                              <Footer />
                              <CallButton />
                         </div>
                    </body>
               </ReduxAppProvider>
          </html>
     );
}
