import WifiOptionBody from "@/Components/Catalog/AirConditioners/Item/WifiOptionBody";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import Link from "next/link";
import guarantee from "@/../public/Icons/productCardGuarantee.png";
import service from "@/../public/Icons/productCardService.png";
import AssuranceDetails from "./AssuranceDetails";
import AddToWishlistContainer from "@/Components/Common/ItemCard/AddToWishlistContainer";
import BuyButton from "./BuyButton";
import OneclickButton from "./OneclickButton";
import ProductTabsPanel from "@/Components/productCard/ProductTabsPanel";
import Image from "next/image";
import { strapiUrl } from "@/service/const";

interface Props {
     product: AircondProductTypeModel;
     currencyVal: number;
     item: string;
}

const Main: React.FC<Props> = ({ product, currencyVal, item }) => {
     const freeDelivery = product.attributes.bonus;
     const productName = product.attributes.name;
     const modelName = product.attributes.paramsWrapper?.aircond?.product?.data.attributes.name;
     const productPrice = product.attributes.price;
     const mainDescription = product.attributes.paramsWrapper?.mainDescription || product.attributes.paramsWrapper?.aircond?.product?.data.attributes.mainDescription;
     const productBrand =
          product.attributes.paramsWrapper?.aircond?.product?.data.attributes.brands?.data.attributes.title || product.attributes.paramsWrapper?.brands?.data.attributes.title;
     const productTypeSlug = product.attributes.productType?.data.attributes.slug;
     const productType = product.attributes.productType?.data.attributes.title;
     const productTypeSingular = product.attributes.productType?.data.attributes.titleSingular;
     const productImage =
          product.attributes.paramsWrapper?.aircond?.product?.data.attributes.previewImage?.data.attributes.url ||
          product.attributes.paramsWrapper.previewImage.data.attributes.url;

     const assurances = [
          {
               id: 0,
               img: guarantee,
               title: "Официальный представитель",
               subtitle: "Гарантия качества всей продукции",
          },
          {
               id: 1,
               img: service,
               title: "Официальная гарантия",
               subtitle: "Ремонт в фирменном сервисе",
          },
     ];

     return (
          <section className="mt-[30px]">
               <div>
                    {freeDelivery && (
                         <div className="bg-[#C2DFFF] h-[18px] min-h-[18px] p-[3px_7px_4px_7px] text-[10px] rounded-[10px] text-center inline-flex md:text-[16px] md:h-[30px] md:min-h-[30px] md:items-center md:justify-center">
                              {freeDelivery}
                         </div>
                    )}
                    <h1 className="mt-5 text-[30px] font-semibold">
                         {productName} {productBrand}
                    </h1>
                    <div className="mt-5">
                         {product.attributes.paramsWrapper?.aircond && <h2 className="text-[18px] font-medium">Все модели серии {modelName}</h2>}
                         {product.attributes.paramsWrapper?.aircond && (
                              <ul className="mt-4 flex flex-col gap-[10px]">
                                   {product.attributes.product?.data?.attributes.models.data.map((model, modelIdx) => {
                                        return (
                                             <li
                                                  key={model.id}
                                                  className={`p-[10px] bg-[#fff] rounded-[10px] h-20 ${
                                                       product.attributes.slug === model.attributes.slug ? "bg-black text-white" : ""
                                                  }`}
                                             >
                                                  <Link href={`/catalog/${productTypeSlug}/${model.attributes.slug}`} className="flex h-full font-semibold gap-[10px]">
                                                       <Image
                                                            src={strapiUrl + productImage}
                                                            alt="product"
                                                            width={500}
                                                            height={500}
                                                            className="flex-[0_1_20%] w-full h-full object-contain"
                                                       />
                                                       <div className="flex-[0_1_80%] flex flex-col justify-between">
                                                            <span>{model.attributes.slug.replace(/-/g, " ").toUpperCase()}</span>
                                                            <span>{(model.attributes.price * currencyVal).toLocaleString()} Сум</span>
                                                       </div>
                                                  </Link>
                                             </li>
                                        );
                                   })}
                              </ul>
                         )}
                         {product.attributes.paramsWrapper?.aircond && <WifiOptionBody model={product} params={item} />}
                         <div className="mt-[30px] text-[16px] font-light leading-[120%]">
                              <p>{mainDescription}</p>
                         </div>
                         <h4 className="mt-[30px] text-[18px] font-semibold">Основные характеристики</h4>
                         <ul className="mt-5 flex flex-col gap-5">
                              <li className="flex flex-col gap-1 md:flex-row md:justify-between">
                                   <div className="font-medium">Бренд</div>
                                   <div>{productBrand}</div>
                              </li>
                              {product.attributes.popularParam.length > 0 &&
                                   product.attributes.popularParam.map((param, paramIdx) => {
                                        return (
                                             <li key={paramIdx} className="flex flex-col gap-1 md:flex-row md:justify-between">
                                                  <div className="font-medium">{param.name}</div>
                                                  <div>{param.value}</div>
                                             </li>
                                        );
                                   })}
                         </ul>
                         <div className="flex flex-col gap-5 mt-[30px] md:flex-row">
                              {assurances.map((el) => {
                                   return <AssuranceDetails key={el.id} img={el.img} title={el.title} subtitle={el.subtitle} />;
                              })}
                         </div>
                         <div className="mt-[30px] flex justify-between items-center">
                              <div className="text-[30px] font-semibold md:text-[36px] md:font-medium">{(productPrice * currencyVal).toLocaleString()} Сум</div>
                              <AddToWishlistContainer
                                   element={{
                                        img: productImage || "",
                                        name: productName,
                                        model: product.attributes.name,
                                        brand: productBrand || "",
                                        type: productType,
                                        title: productTypeSingular,
                                   }}
                              />
                         </div>
                         <div className="mt-5">
                              <BuyButton model={product} />
                              <OneclickButton />
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Main;
//className={productModel.attributes.slug === model.attributes.slug ? styles.item__models__active : ""}
