import FilterBlock from "@/Components/Common/Filtration/FilterBlock";
import { brandFilterAirPurifiers } from "@/Redux/Slices/AircodnFilter.slice";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";

type FilterFields = {
   title: string;
   list: string[];
   id: string[];
   filterVal: string[];
};

type Filters = {
   brand: boolean[];
};

type Props = {
   isMobile: boolean;
   filters: Filters;
   filterFields: FilterFields[];
};

function Sidebar({ isMobile, filters, filterFields }: Props) {
   return (
      <div className={`${styles.aircond__aside} ${isMobile ? styles.aircond__aside__mobile : ""}`}>
         <FilterBlock content={filterFields[0]} dispatcher={brandFilterAirPurifiers} filters={filters.brand} />
      </div>
   );
}
export default Sidebar;
