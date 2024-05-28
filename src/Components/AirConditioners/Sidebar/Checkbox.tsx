import { ChangeEvent, useRef, useState } from "react";
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
   setState: Function;
   dispatcher?: Function;
};

function Checkbox({ content, index, el, setState, dispatcher }: Props) {
   const dispatch = useAppDispatch();
   const [isActive, setActive] = useState(false);
   function toggleCheckbox() {
      setState((prev: boolean[]) => {
         const updated = [...prev];
         updated[index] = !updated[index];
         return updated;
      });
      setActive(!isActive);
   }
   return (
      <label htmlFor={content.id[index]} key={index} className={styles.aircond__aside__checboxesBody}>
         <input
            className={isActive ? styles.aircond__aside__checked : ""}
            onChange={toggleCheckbox}
            checked={isActive}
            id={content.id[index]}
            type="checkbox"
         />
         <div>{el}</div>
      </label>
   );
}
export default Checkbox;
