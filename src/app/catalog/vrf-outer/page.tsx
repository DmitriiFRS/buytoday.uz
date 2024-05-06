import fetchData from "@/Functions/fetchContentfulREST";

async function page() {
   const data: any = await fetchData("vrf");
   return (
      <div>
         {data.items.map((el: any, index: any) => {
            return (
               <div key={index}>
                  <div style={{ fontSize: "30px" }}>{el.fields.name}</div>
                  {el.fields.vrfOuter.map((elem: any, idx: any) => {
                     return <div key={idx}>{elem.fields.model}</div>;
                  })}
               </div>
            );
         })}
      </div>
   );
}
export default page;
