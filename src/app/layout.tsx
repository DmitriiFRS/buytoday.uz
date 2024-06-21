import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { ReduxAppProvider } from "@/Redux/ReduxAppProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Amazon-Asia - интернет магазин электроники и бытовой техники",
   description: "Дешевые цены на кондиционеры, бытовую технику и электронику в Ташкенте, гарантия качества, большой выбор товаров",
   keywords: ["интернет-магазин", "скидки", "выгодно", "Ташкент", "Узбекистан"],
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="ru">
         <ReduxAppProvider>
            <body className={inter.className}>
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
