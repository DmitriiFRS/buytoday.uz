"use client";

import WifiOption from "./WifiOption";
import { useAppDispatch, useAppSelector } from "@/Hooks/ReduxHooks";
import { setUrl, toggleWifiCheckbox } from "@/Redux/Slices/ItemCard.slice";
import { useEffect } from "react";
import WifiIncludes from "./WifiIncludes";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";

function WifiOptionBody({ model, params }: { model: AircondProductTypeModel; params: string }) {
   const dispatch = useAppDispatch();
   const isActive = useAppSelector((state) => state.itemSlice.isWifiActive);
   const url = useAppSelector((state) => state.itemSlice.modelUrl);

   useEffect(() => {
      if (!url) {
         dispatch(setUrl(params.split("_")[0]));
      }
      if (params.split("_")[0] !== url && isActive) {
         dispatch(toggleWifiCheckbox(false));
      }
   }, []);
   return (
      <>
         {model.attributes.wifiPrice && model.attributes.price !== model.attributes.wifiPrice ? (
            <WifiOption />
         ) : model.attributes.wifiPrice === model.attributes.price ? (
            <WifiIncludes />
         ) : (
            ""
         )}
      </>
   );
}
export default WifiOptionBody;
