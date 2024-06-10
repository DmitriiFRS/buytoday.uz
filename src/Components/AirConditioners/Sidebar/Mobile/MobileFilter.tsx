import MenuModalWindow from "@/Components/Utilities/MenuModalWindow";
import styles from "./Mobile.module.scss";
import { useAppSelector } from "@/Hooks/ReduxHooks";
import { wifiFilter, brandFilter, powerFilter } from "@/Redux/Slices/AircodnFilter.slice";
import FilterBlock from "../FilterBlock";

type FilterFields = {
   title: string;
   list: string[];
   id: string[];
};

type Props = {
   filterFields: FilterFields[];
   setMobileFilterOpen: (bool: boolean) => void;
};

function MobileFilter({ filterFields, setMobileFilterOpen }: Props) {
   const filters = useAppSelector((state) => state.aircondFilterSlice);
   return (
      <MenuModalWindow btnText="Найти" toggleWindow={setMobileFilterOpen}>
         <div className={`${styles.aircond__aside} ${styles.sidebar}`}>
            <FilterBlock content={filterFields[0]} dispatcher={brandFilter} filters={filters.aircond.brand} />
            <FilterBlock content={filterFields[1]} dispatcher={powerFilter} filters={filters.aircond.power} />
            <FilterBlock content={filterFields[2]} dispatcher={wifiFilter} filters={filters.aircond.wifi} />
         </div>
      </MenuModalWindow>
   );
}
export default MobileFilter;
