import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/Components/Header/Header";
import Footer from "@/Components/Footer/Footer";
import { ReduxAppProvider } from "@/Redux/ReduxAppProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Amazon-Asia",
   description: "Интернет магазин Amazon Asia",
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
