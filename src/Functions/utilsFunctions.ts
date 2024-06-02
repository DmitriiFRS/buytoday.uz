type Item = {
   name: string;
   url: string;
   company: string;
   model: string;
   price: number;
   image: string;
};
type Items = Item[];

export function addItemToCart(item: Item, setNewItem: Function, items: Items) {
   setNewItem([...items, item]);
}
