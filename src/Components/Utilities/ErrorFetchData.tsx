"use client";

import { useEffect, useState } from "react";

function ErrorFetchData() {
   const [isClient, setClient] = useState(false);
   useEffect(() => {
      setClient(true);
   }, []);
   isClient && alert("Ошибка загрузки данных, попробуйте обновить страницу");
   return <></>;
}
export default ErrorFetchData;
