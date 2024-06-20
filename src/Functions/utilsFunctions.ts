import { Dispatch, SetStateAction } from "react";

type Item = {
   id: number;
   name: string;
   url: string;
   company: string;
   model: string;
   price: number;
   image: string;
   count: number;
};
type Items = Item[];

type CartItem = {
   count: number;
};
type RemoveItem = {
   id: number;
};

export function addItemToCart(item: Item, setNewItem: Function, items: Items) {
   setNewItem([...items, item]);
}

export function incrementCartItem<T extends CartItem>(item: T, setItem: Function) {
   if (item?.count === 20) return;
   setItem((prev: any) => ({
      ...prev,
      count: prev.count + 1,
   }));
}

export function decrementCartItem<T extends CartItem>(item: T, setItem: Function) {
   if (item?.count === 1) return;
   setItem((prev: any) => ({
      ...prev,
      count: prev.count - 1,
   }));
}

export function removeItem<E extends RemoveItem, I extends RemoveItem>(el: E, items: I[], setItem: Function) {
   let tempItems = items.slice();
   tempItems = tempItems.filter((item) => item.id !== el.id);
   setItem(tempItems);
}

export function clearLocalStorage(setLsItem: Function, dispatch: Function, setCount: Function) {
   setLsItem([]);
   dispatch(setCount(0));
}

export function openFilter(setMobileFilterOpen: Dispatch<SetStateAction<boolean>>) {
   const scrollWidth = window.innerWidth - document.body.clientWidth;
   document.body.style.overflow = "hidden";
   document.body.style.paddingRight = `${scrollWidth}px`;
   setMobileFilterOpen(true);
}
