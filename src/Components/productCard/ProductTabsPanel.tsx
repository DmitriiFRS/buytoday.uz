"use client";

import { tabsData } from "@/Components/Common/ItemCard/Tabs/tabsData";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import styles from "../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Description from "@/Components/Common/ItemCard/Tabs/Description";
import Reviews from "@/Components/Common/ItemCard/Tabs/Reviews";
import { AircondProductTypeModel } from "@/Types/AircondProductType.type";
import ProductParams from "./ProductParams";

type Props = {
     model: AircondProductTypeModel;
};

function TabsPanel({ model }: Props) {
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
                         <ProductParams model={model} />
                    ) : value === 1 ? (
                         <Description
                              mainDescription={
                                   model.attributes.paramsWrapper?.aircond?.product.data.attributes.mainDescription || model.attributes.paramsWrapper?.mainDescription || ""
                              }
                              descriptions={
                                   model.attributes.paramsWrapper?.aircond?.product.data.attributes.additionalDescription ||
                                   model.attributes.paramsWrapper?.additionalDescription ||
                                   ""
                              }
                         />
                    ) : (
                         <Reviews review={model.attributes.paramsWrapper?.aircond?.product.data.attributes.videoRef || model.attributes.paramsWrapper?.videoRef || ""} />
                    )}
               </section>
          </>
     );
}
export default TabsPanel;
