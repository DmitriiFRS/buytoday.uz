"use client";

import { tabsData } from "@/Components/Common/ItemCard/Tabs/tabsData";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import styles from "../../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Description from "@/Components/Common/ItemCard/Tabs/Description";
import Reviews from "@/Components/Common/ItemCard/Tabs/Reviews";
import Params from "./Params";
import { AircondDataInner, AircondDataModel } from "@/app/catalog/air-conditioners/[item]/page";

type Props = {
   el: AircondDataInner;
   el2: AircondDataModel;
};

function TabsPanel({ el, el2 }: Props) {
   const [value, setValue] = useState(0);
   const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
   };
   return (
      <>
         <Box className={styles.tabsBox}>
            <Tabs
               className={styles.tabs}
               value={value}
               onChange={handleChange}
               TabIndicatorProps={{
                  sx: { backgroundColor: "#000" },
               }}
            >
               {tabsData.map((tab) => {
                  return (
                     <Tab
                        key={tab.id}
                        label={tab.title}
                        className={styles.tab}
                        sx={{
                           "&.Mui-selected": {
                              color: "#000",
                           },
                        }}
                     />
                  );
               })}
            </Tabs>
         </Box>
         <section className={styles.item__params}>
            {value === 0 ? (
               <Params el={el} elInner={el2} />
            ) : value === 1 ? (
               <Description mainDescription={el.description} descriptions={el.description1} />
            ) : (
               <Reviews review={el.review} />
            )}
         </section>
      </>
   );
}
export default TabsPanel;
