import { CommonFilterList } from "@/Types/AircondFilters.type";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";
import { useEffect } from "react";

type PropTypes = {
   slug: string;
   title: string;
   onChange: () => void;
   checked: boolean | undefined;
};

function ProductTypeCheckbox({ slug, title, onChange, checked }: PropTypes) {
   return (
      <label htmlFor={slug + title} className={styles.aircond__aside__checboxesBody}>
         <input className={checked ? styles.aircond__aside__checked : ""} checked={checked ?? false} onChange={onChange} id={slug + title} type="checkbox" />
         <div>{title}</div>
      </label>
   );
}
export default ProductTypeCheckbox;
