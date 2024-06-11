type Item = {
   name: string;
   url: string;
   company: string;
   model: string;
   price: number;
   image: string;
};
type Items = Item[];

type CartItem = {
   count: number;
};

export function addItemToCart(item: Item, setNewItem: Function, items: Items) {
   setNewItem([...items, item]);
}

export function incrementCartItem<T extends CartItem>(item: T, setItem: Function) {
   if (typeof item === "object" && item?.count === 20) return;
   setItem((prev: any) => ({
      ...prev,
      count: prev.count + 1,
   }));
}

export function decrementCartItem<T extends CartItem>(item: T, setItem: Function) {
   if (typeof item === "object" && item?.count === 1) return;
   setItem((prev: any) => ({
      ...prev,
      count: prev.count - 1,
   }));
}
