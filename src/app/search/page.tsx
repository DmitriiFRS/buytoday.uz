import fetchGraphql from "@/Functions/fetchGraphql";

async function page() {
   const data = await fetchGraphql(`
   query {
      airConditionersCollection(limit: 50) {
        items {
          name
          url
          isInverter
          company
          imageCollection(limit: 1) {
            items {
              url
            }
          }
          airCondModelCollection(limit: 6) {
            items {
              model
              filterBtu
              price
              coolingPowerBtu
            }
          }
        }
      }
      multisplitCollection(limit: 50) {
        items {
          name
          url
          isInverter
          company
          imageCollection(limit: 1) {
            items {
              url
            }
          }
          multisplitModelCollection(limit: 6) {
            items {
              model
              price
              coolingPowerKw
            }
          }
        }
      }
      semiIndustrialCollection(limit: 50) {
        items {
          name
          url
          isInverter
          company
          imageCollection(limit: 1) {
            items {
              url
            }
          }
          semiCondModelCollection(limit: 10) {
            items {
              model
              price
              coolingPowerBtu
            }
          }
        }
      }
    }
   `);
   console.log(data);
   return <div></div>;
}
export default page;
