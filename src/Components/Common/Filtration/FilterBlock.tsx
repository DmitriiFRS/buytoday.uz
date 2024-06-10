import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Checkbox from "./Checkbox";

type Props = {
   content: {
      title: string;
      list: string[];
      id: string[];
   };
   dispatcher: Function;
   filters: boolean[];
};

function FilterBlock({ content, dispatcher, filters }: Props) {
   return (
      <div className={styles.aircond__aside__body}>
         <div className={styles.aircond__aside__title}>{content.title}</div>
         <div className={styles.aircond__aside__checboxes}>
            {content.list.map((el, index) => {
               return <Checkbox key={index} index={index} content={content} el={el} dispatcher={dispatcher} filters={filters} />;
            })}
         </div>
      </div>
   );
}
export default FilterBlock;
