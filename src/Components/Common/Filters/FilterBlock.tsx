import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Checkbox from "./Checkbox";

type Props = {
   content: {
      title: string;
      titleVal: string;
      list: string[];
      filterVal: string[];
      id: string[];
   };
   checkboxState: { [key: string]: boolean };
   toggleCheckbox: Function;
};

function FilterBlock({ content, checkboxState, toggleCheckbox }: Props) {
   return (
      <div className={styles.aircond__aside__body}>
         <div className={styles.aircond__aside__title}>{content.title}</div>
         <div className={styles.aircond__aside__checboxes}>
            {content.filterVal.map((el, index) => {
               return <Checkbox key={index} el={el} index={index} content={content} checkboxState={checkboxState} toggleCheckbox={toggleCheckbox} />;
            })}
         </div>
      </div>
   );
}
export default FilterBlock;
