import useLocalStorage from "@/Hooks/useLocalStorage";
import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import { GrFavorite } from "react-icons/gr";
import { MdFavorite } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

type Props = {
   element: {
      img: string;
      name: string;
      model: string;
      title: string;
      id?: number;
      url?: string;
   };
   setPopupOpen: (b: boolean) => void;
};

type Element = {
   img: string;
   name: string;
   model: string;
   title: string;
   id: number;
   url: string;
};

function AddToWishlist({ element, setPopupOpen }: Props) {
   const [wishListItems, setWishlistItem] = useLocalStorage<Element[]>("wishlist", []);
   const [isItemInWishlist, setItemToWishlist] = useState(false);
   const [isClient, setClient] = useState(false);
   const pathname = usePathname();
   const timerRef = useRef<NodeJS.Timeout | null>(null);

   function addToWishlist() {
      if (wishListItems.length > 0 && wishListItems.find((el) => el.url === pathname)) {
         setWishlistItem((prev) => {
            return prev.filter((el) => el.url !== pathname);
         });
         setItemToWishlist(false);
      } else {
         if (timerRef.current !== null) {
            clearTimeout(timerRef.current);
         }
         element.id = Date.now();
         element.url = pathname;
         setWishlistItem([...wishListItems, element as Element]);
         setItemToWishlist(true);
         setPopupOpen(true);
         timerRef.current = setTimeout(() => {
            setPopupOpen(false);
         }, 6000);
      }
   }

   useEffect(() => {
      if (wishListItems.length > 0) {
         wishListItems.forEach((el) => {
            if (el.url === pathname) {
               setItemToWishlist(true);
            }
         });
      }
      setClient(true);
   }, [wishListItems, pathname]);

   return (
      isClient && (
         <>
            <button onClick={addToWishlist} className={styles.favorite}>
               {isItemInWishlist ? <MdFavorite className={styles.favorite__iconActive} /> : <GrFavorite className={styles.favorite__icon} />}
               <div className={`${styles.favorite__title} ${isItemInWishlist ? styles.favorite__title__active : ""}`}>
                  {isItemInWishlist ? "В избранном" : "В избранное"}
               </div>
            </button>
         </>
      )
   );
}
export default AddToWishlist;
