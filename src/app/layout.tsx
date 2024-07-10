import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.scss";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { ReduxAppProvider } from "@/Redux/ReduxAppProvider";

const rubik = Rubik({ subsets: ["latin", "cyrillic-ext"] });

export const metadata: Metadata = {
   title: `${process.env.BRAND} - интернет магазин кондиционеров, электроники и бытовой техники`,
   description: "Дешевые цены на кондиционеры, бытовую технику и электронику в Ташкенте, гарантия качества, большой выбор товаров",
   keywords: ["интернет-магазин", "скидки", "выгодно", "Ташкент", "Узбекистан"],
   viewport: "width=device-width, initial-scale=1, maximum-scale=1",
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
               </div>
            </body>
         </ReduxAppProvider>
      </html>
   );
}
