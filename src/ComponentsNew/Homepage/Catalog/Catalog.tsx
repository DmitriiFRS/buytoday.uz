import Container from "@/Components/Common/Container";
import CatalogTitles from "./CatalogTitles";
import CatalogCategories from "./CatalogCategories";

interface Props {}

const Catalog: React.FC<Props> = ({}) => {
     return (
          <section className="mt-[120px]">
               <Container className="">
                    <div className="bg-white rounded-[15px] p-5 lg:p-10">
                         <div>
                              <CatalogTitles />
                         </div>
                         <div className="mt-10">
                              <CatalogCategories />
                         </div>
                    </div>
               </Container>
          </section>
     );
};

export default Catalog;
