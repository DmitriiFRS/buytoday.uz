import ProductTabsPanel from "@/Components/productCard/ProductTabsPanel";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";

interface Props {
     product: AircondProductTypeModel;
}

const Bottom: React.FC<Props> = ({ product }) => {
     return (
          <div className="mt-[30px]">
               <ProductTabsPanel model={product} />
          </div>
     );
};

export default Bottom;
