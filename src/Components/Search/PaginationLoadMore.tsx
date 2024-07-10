"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "./Search.module.scss";
import NextNProgress from "nextjs-progressbar";
import NProgress from "nprogress";
import { useEffect } from "react";

type Props = {
   pagination: {
      page: number;
      totalPages: number;
   };
};

function PaginationLoadMore({ pagination }: Props) {
   const router = useRouter();
   const searchParams = useSearchParams();
   const newSearchParams = new URLSearchParams(searchParams.toString());
   function togglePage() {
      if (pagination.page === pagination.totalPages) return;
      newSearchParams.set("page", (pagination.page += 1).toString());
      router.push("/search" + "?" + newSearchParams.toString());
      NProgress.start();
   }
   useEffect(() => {
      NProgress.done();
   }, [searchParams]);
   return (
      <div className={styles.pagination}>
         <NextNProgress color="#03cffc" />
         {pagination.page < pagination.totalPages && (
            <button onClick={togglePage} className={styles.pagination__btn}>
               Загрузить больше...
            </button>
         )}
      </div>
   );
}
export default PaginationLoadMore;
