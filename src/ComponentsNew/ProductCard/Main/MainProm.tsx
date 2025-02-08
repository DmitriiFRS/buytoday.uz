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
import { VRFInnerBody } from "@/Components/Catalog/VrfInner/VrfInner.data";
import MainPromSwiper from "./MainPromSwiper";

interface Props {
     productInner: VRFInnerBody;
     item: string;
     productOuter: VRFInnerBody;
     category: string;
}

const MainProm: React.FC<Props> = ({ productInner, productOuter, item, category }) => {
     const productName = productOuter.name;
     const models = productOuter.models;
     const mainDescription = productInner.description;
     const productBrand = productOuter.company;
     const productType = productInner.name;
     const productImage = productOuter.imges[0];
     console.log(productName);
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
                    <h1 className="mt-5 text-[30px] font-semibold">{productName}</h1>
                    <div className="mt-5">
                         {<h2 className="text-[18px] font-medium">Все модели серии {productName}</h2>}

                         <ul className="mt-4 flex flex-col gap-[10px]">
                              {models.length < 6 ? (
                                   models.map((model, modelIdx) => {
                                        return (
                                             <li
                                                  key={modelIdx}
                                                  className={`p-[10px] bg-[#fff] rounded-[10px] h-20 ${productInner.url === model.model ? "bg-black text-white" : ""}`}
                                             >
                                                  <Link
                                                       href={`/catalog/${category}/${productOuter.url}_${model.model.replace(/\s|\//g, "-").toLowerCase()}`}
                                                       className="flex h-full font-semibold gap-[10px]"
                                                  >
                                                       <Image src={productImage} alt="product" width={500} height={500} className="flex-[0_1_20%] w-full h-full object-contain" />
                                                       <div className="flex-[0_1_80%] flex flex-col justify-between">
                                                            <span>{model.model.replace(/-/g, " ").toUpperCase()}</span>
                                                       </div>
                                                       <div>
                                                            <span>{model.coolingPower}</span>
                                                            <span>kW</span>
                                                       </div>
                                                  </Link>
                                             </li>
                                        );
                                   })
                              ) : (
                                   <MainPromSwiper models={models} productInner={productInner} productImage={productImage} category={category} productOuter={productOuter} />
                              )}
                         </ul>

                         <div className="mt-[30px] text-[16px] font-light leading-[120%]">
                              <p>{mainDescription}</p>
                         </div>
                         <h4 className="mt-[30px] text-[18px] font-semibold">Основные характеристики</h4>
                         <ul className="mt-5 flex flex-col gap-5">
                              <li className="flex flex-col gap-1 md:flex-row md:justify-between">
                                   <div className="font-medium">Бренд</div>
                                   <div>{productBrand}</div>
                              </li>
                         </ul>
                         <div className="flex flex-col gap-5 mt-[30px] md:flex-row">
                              {assurances.map((el) => {
                                   return <AssuranceDetails key={el.id} img={el.img} title={el.title} subtitle={el.subtitle} />;
                              })}
                         </div>
                         <div className="mt-[30px] flex justify-between items-center">
                              <AddToWishlistContainer
                                   element={{
                                        img: (productImage as any) || "",
                                        name: productName,
                                        model: productInner.name,
                                        brand: productBrand || "",
                                        type: productType,
                                        title: "Промышленное оборудование",
                                   }}
                              />
                         </div>
                         <div className="mt-5">
                              <OneclickButton isProm />
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default MainProm;
//className={productModel.attributes.slug === model.attributes.slug ? styles.item__models__active : ""}
