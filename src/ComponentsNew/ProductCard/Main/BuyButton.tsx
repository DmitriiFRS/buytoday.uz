"use client";

import Loader from "@/Components/Utilities/Loader";
import { decrementCartItem, incrementCartItem } from "@/Functions/utilsFunctions";
import { useAppDispatch, useAppSelector } from "@/Hooks/ReduxHooks";
import useLocalStorage from "@/Hooks/useLocalStorage";
import { setItemsCount } from "@/Redux/Slices/OrderCart.slice";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Props {
     model: AircondProductTypeModel;
}

interface Item {
     id: number;
     name: string;
     url: string;
     company: string;
     image: string;
     model: string;
     price: number | null;
     wifiPrice: number | null;
     count: number;
}

const BuyButton: React.FC<Props> = ({ model }) => {
     const [items, setItem] = useLocalStorage<Item[]>("cart", []);
     const [activeItem, setActiveItem] = useState<null | Item>(null);
     const isWifiActive = useAppSelector((state) => state.itemSlice.isWifiActive);
     const [isLoading, setLoading] = useState(true);
     const dispatch = useAppDispatch();
     function addToCart() {
          if (!model.attributes.isInStock) return;
          const item = {
               id: Date.now(),
               name: `${model.attributes.name} ${isWifiActive ? "с wi-fi модулем" : ""}`,
               url: model.attributes.slug,
               company:
                    model.attributes.paramsWrapper?.aircond?.product?.data.attributes.brands?.data.attributes.title ||
                    model.attributes.paramsWrapper?.brands?.data.attributes.title ||
                    "",
               image:
                    model.attributes.paramsWrapper?.aircond?.product.data.attributes.previewImage?.data.attributes.url ||
                    model.attributes.paramsWrapper?.previewImage.data?.attributes.url ||
                    "",
               model: model.attributes.slug,
               price: isWifiActive ? null : model.attributes.price,
               wifiPrice: isWifiActive ? model.attributes.wifiPrice : null,
               count: 1,
          };
          setItem([...items, item]);
     }
     useEffect(() => {
          dispatch(setItemsCount(items.length));
          if (items.some((item) => item.model === model.attributes.slug && Boolean(item.wifiPrice) === isWifiActive)) {
               items.some((item) => {
                    if (item.model === model.attributes.slug && Boolean(item.wifiPrice) === isWifiActive) setActiveItem(item);
               });
          } else {
               setActiveItem(null);
               setLoading(false);
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [items, isWifiActive]);

     useEffect(() => {
          const temp = items.slice();
          if (activeItem) {
               items.forEach((item, idx) => {
                    if (item.model === activeItem.model && Boolean(item.wifiPrice) === isWifiActive) {
                         temp[idx].count = activeItem.count;
                    }
               });
               setItem(temp);
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [activeItem?.count]);

     return isLoading ? (
          <Loader />
     ) : items && activeItem ? (
          <>
               <Link className="w-full flex items-center justify-center h-[50px] rounded-[25px] bg-[#5e5e5e] text-white text-[16px] font-medium" href={"/cart"}>
                    В корзине
               </Link>
               <div className="flex items-center justify-center gap-5 mt-2 w-full rounded-[25px] h-[50px] bg-[#5e5e5e] text-white text-[16px] font-medium">
                    <button onClick={() => decrementCartItem(activeItem, setActiveItem)}>-</button>
                    <div>{activeItem.count}</div>
                    <button onClick={() => incrementCartItem(activeItem, setActiveItem)}>+</button>
               </div>
          </>
     ) : (
          <button className="w-full flex items-center justify-center h-[50px] rounded-[25px] bg-black text-white text-[16px] font-medium" onClick={addToCart}>
               {model.attributes.isInStock ? "Добавить в корзину" : "Нет в наличии"}
          </button>
     );
};

export default BuyButton;
