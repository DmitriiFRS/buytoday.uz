"use client";
import { usePathname, useSearchParams } from "next/navigation";
import NextNProgress from "nextjs-progressbar";
import NProgress from "nprogress";
import { useEffect } from "react";

function NPogressClient() {
   const pathname = usePathname();
   const searchParams = useSearchParams();
   useEffect(() => {
      // You can now use the current URL
      NProgress.start();
   }, [pathname]);

   useEffect(() => {
      NProgress.done();
      // You can now use the current URL
   }, [searchParams]);
   return <NextNProgress color="orange" height={3} />;
}
export default NPogressClient;
