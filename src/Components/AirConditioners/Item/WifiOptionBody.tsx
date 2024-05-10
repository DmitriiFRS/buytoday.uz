"use client";

import { AircondDataInner, AircondDataModel } from "@/app/catalog/air-conditioners/[item]/page";
import WifiOption from "./WifiOption";
import { useAppDispatch, useAppSelector } from "@/Hooks/ReduxHooks";
import { toggleWifiCheckbox } from "@/Redux/Slices/ItemCard.slice";
import { useEffect } from "react";

function WifiOptionBody({ itemUrl, el2, params }: { itemUrl: string; el2: AircondDataModel; params: string }) {
   const dispatch = useAppDispatch();
   const isActive = useAppSelector((state) => state.itemSlice.isWifiActive);

   useEffect(() => {
      if (params.split("_")[0] !== itemUrl && isActive) dispatch(toggleWifiCheckbox(false));
   }, []);
   return <>{el2.wifiPrice ? <WifiOption /> : ""}</>;
}
export default WifiOptionBody;
