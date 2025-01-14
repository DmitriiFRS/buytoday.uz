"use client";

import useLocalStorage from "@/Hooks/useLocalStorage";
import styles from "../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { useAppDispatch, useAppSelector } from "@/Hooks/ReduxHooks";
import { useEffect, useState } from "react";
import Link from "next/link";
import Loader from "@/Components/Utilities/Loader";
import { setItemsCount } from "@/Redux/Slices/OrderCart.slice";
import { decrementCartItem, incrementCartItem } from "@/Functions/utilsFunctions";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";

type Props = {
     model: AircondProductTypeModel;
};

type Item = {
     id: number;
     name: string;
     url: string;
     company: string;
     image: string;
     model: string;
     price: number | null;
     wifiPrice: number | null;
     count: number;
};

function ProductBuy({ model }: Props) {
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
               <Link href={"/cart"} className={`${styles.item__buy} ${styles.item__inCart}`}>
                    В корзине
               </Link>
               <div className={styles.item__counter}>
                    <button onClick={() => decrementCartItem(activeItem, setActiveItem)} className={styles.item__countBtn}>
                         -
                    </button>
                    <div className={styles.item__count}>{activeItem.count}</div>
                    <button onClick={() => incrementCartItem(activeItem, setActiveItem)} className={`${styles.item__countBtn} ${styles.item__countBtnPlus}`}>
                         +
                    </button>
               </div>
          </>
     ) : (
          <button onClick={addToCart} className={`${styles.item__buy} ${!model.attributes.isInStock ? styles.item__unavailable : ""}`}>
               {model.attributes.isInStock ? "Добавить в корзину" : "Нет в наличии"}
          </button>
     );
}
export default ProductBuy;
