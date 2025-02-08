import MainProm from "./Main/MainProm";
import { VRFInnerBody } from "@/Components/Catalog/VrfInner/VrfInner.data";
import SliderProm from "./Slider/SliderProm";
import BottomProm from "./Bottom/BottomProm";

interface Props {
     product: VRFInnerBody;
     item: string;
     productOuter: VRFInnerBody;
     category: string;
}

const ProductCard: React.FC<Props> = ({ product, item, productOuter, category }) => {
     return (
          <div className="">
               <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-[30px]">
                    <SliderProm product={productOuter} />
                    <MainProm productInner={product} productOuter={productOuter} item={item} category={category} />
               </div>
               {<BottomProm product={product} productOuter={productOuter} />}
          </div>
     );
};

export default ProductCard;
