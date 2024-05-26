import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import Checkbox from "./Checkbox";

type Props = {
   content: {
      title: string;
      list: string[];
      id: string[];
   };
   setState: Function;
};

function FilterBlock({ content, setState }: Props) {
   return (
      <div className={styles.aircond__aside__body}>
         <div className={styles.aircond__aside__title}>{content.title}</div>
         <div className={styles.aircond__aside__checboxes}>
            {content.list.map((el, index) => {
               return <Checkbox key={index} index={index} content={content} el={el} setState={setState} />;
            })}
         </div>
      </div>
   );
}
export default FilterBlock;
