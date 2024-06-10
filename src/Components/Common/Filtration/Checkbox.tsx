import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";
import { useAppDispatch } from "@/Hooks/ReduxHooks";

type Props = {
   content: {
      title: string;
      list: string[];
      id: string[];
   };
   index: number;
   el: string;
   dispatcher: Function;
   filters: boolean[];
};

function Checkbox({ content, index, el, dispatcher, filters }: Props) {
   const dispatch = useAppDispatch();
   function toggleCheckbox() {
      const updated = [...filters];
      updated[index] = !updated[index];
      dispatch(dispatcher(updated));
   }
   return (
      <label htmlFor={content.id[index]} key={index} className={styles.aircond__aside__checboxesBody}>
         <input
            className={filters[index] ? styles.aircond__aside__checked : ""}
            onChange={toggleCheckbox}
            checked={filters[index]}
            id={content.id[index]}
            type="checkbox"
         />
         <div>{el}</div>
      </label>
   );
}
export default Checkbox;
