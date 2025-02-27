import Container from "@/Components/Common/Container";
import CatalogTitles from "./CatalogTitles";
import CatalogCategories from "./CatalogCategories";

interface Props {}

const Catalog: React.FC<Props> = ({}) => {
     return (
          <section className="mt-20 md:mt-[120px]">
               <Container className="">
                    <div className="bg-white rounded-[15px] p-5 lg:p-10">
                         <div>
                              <CatalogCategories />
                         </div>
                         <div className="mt-10">
                              <CatalogTitles />
                         </div>
                    </div>
               </Container>
          </section>
     );
};

export default Catalog;
