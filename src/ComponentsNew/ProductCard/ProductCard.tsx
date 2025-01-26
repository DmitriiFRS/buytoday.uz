import Container from "@/Components/Common/Container";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import Slider from "./Slider/Slider";
import Main from "./Main/Main";
import Bottom from "./Bottom/Bottom";

interface Props {
     product: AircondProductTypeModel;
     item: string;
     currencyVal: number;
}

const ProductCard: React.FC<Props> = ({ product, currencyVal, item }) => {
     return (
          <div className="">
               <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[30px]">
                    <Slider product={product} />
                    <Main product={product} currencyVal={currencyVal} item={item} />
               </div>
               <Bottom product={product} />
          </div>
     );
};

export default ProductCard;
