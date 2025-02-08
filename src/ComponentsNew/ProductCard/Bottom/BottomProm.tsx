"use client";

import { VRFInnerBody } from "@/Components/Catalog/VrfInner/VrfInner.data";
import { tabsData } from "@/Components/Common/ItemCard/Tabs/tabsData";
import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import styles from "../../../Components/Aircond&SemiInd/ItemAircondSemi.module.scss";
import ProductParamsProm from "@/Components/productCard/ProductParamsProm";
import Description from "@/Components/Common/ItemCard/Tabs/Description";
import Reviews from "@/Components/Common/ItemCard/Tabs/Reviews";

interface PropTypes {
     product: VRFInnerBody;
     productOuter: VRFInnerBody;
}

const BottomProm = ({ product, productOuter }: PropTypes) => {
     const [value, setValue] = useState(0);
     const handleChange = (event: React.SyntheticEvent, newValue: number) => {
          setValue(newValue);
     };
     return (
          <div className="mt-[30px]">
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
                         <ProductParamsProm el={productOuter} elInner={product} />
                    ) : value === 1 ? (
                         <Description descriptions={productOuter.description} />
                    ) : (
                         <Reviews review={""} />
                    )}
               </section>
          </div>
     );
};

export default BottomProm;
