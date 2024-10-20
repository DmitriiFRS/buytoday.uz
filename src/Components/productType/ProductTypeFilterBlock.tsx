import { CommonFilterList } from "@/Types/AircondFilters.type";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import ProductTypeCheckbox from "./ProductTypeCheckbox";
import { useEffect } from "react";
import { useFilterContext } from "@/Context/FilterContext";

type PropTypes = {
   title: string;
   content?: CommonFilterList[];
   values: string[] | null;
   setValue: (values: string[] | null) => void;
};

function ProductTypeFilterBlock({ title, content, values, setValue }: PropTypes) {
   const { setPage } = useFilterContext();
   const handleCheckboxChange = (value: string) => {
      const newValues = values ? [...values] : [];
      if (newValues.includes(value)) {
         newValues.splice(newValues.indexOf(value), 1);
      } else {
         newValues.push(value);
      }
      setValue(newValues.length > 0 ? newValues : null);
      setPage(null);
   };
   return (
      <div className={styles.aircond__aside__body}>
         <div className={styles.aircond__aside__title}>{title}</div>
         <div className={styles.aircond__aside__checboxes}>
            {content &&
               content.map((el, index) => {
                  return (
                     <ProductTypeCheckbox
                        key={index}
                        slug={el.attributes.slug}
                        title={el.attributes.title}
                        onChange={() => handleCheckboxChange(el.attributes.slug.toString())}
                        checked={values?.includes(el.attributes.slug.toString())}
                     />
                  );
               })}
         </div>
      </div>
   );
}
export default ProductTypeFilterBlock;
