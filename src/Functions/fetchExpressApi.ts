export async function fetchExpressApi(url: string) {
   try {
      const res = await fetch(url, {
         cache: "no-store",
      });
      if (!res.ok) throw new Error("Ошибка при загрузке данных");
      const data = await res.json();
      return data;
   } catch (err) {
      console.error(err);
      return false;
   }
}
