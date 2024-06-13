"use client";

import RightBottomPopup from "@/Components/Utilities/RightBottomPopup";
import AddToWishlist from "./AddToWishlist";
import { useState } from "react";

type Props = {
   element: {
      img: string;
      name: string;
      model: string;
      title: string;
   };
};

function AddToWishlistContainer({ element }: Props) {
   const [isPopupOpen, setPopupOpen] = useState(false);
   return (
      <>
         <RightBottomPopup isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen} />
         <AddToWishlist setPopupOpen={setPopupOpen} element={element} />
      </>
   );
}
export default AddToWishlistContainer;
