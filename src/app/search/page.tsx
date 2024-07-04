import { fetchExpressApi } from "@/Functions/fetchExpressApi";

async function page() {
   return <div></div>;
}
export default page;

/*const data = await fetchExpressApi(`${process.env.BACKEND_URL}/api/allItems`);
   console.log(data.newItems);
   return (
      <div>
         {data.newItems.map((el: any, index: number) => {
            return (
               <li key={index}>
                  {el.name} {el.model}
               </li>
            );
         })}
      </div>
   );*/
