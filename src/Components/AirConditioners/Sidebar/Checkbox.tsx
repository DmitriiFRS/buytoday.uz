import { ChangeEvent, useRef, useState } from "react";
import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";

type Props = {
   content: {
      title: string;
      list: string[];
      id: string[];
   };
   index: number;
   el: string;
   setState: Function;
};

function Checkbox({ content, index, el, setState }: Props) {
   const [isActive, setActive] = useState(false);
   const ref = useRef<HTMLDivElement>(null);
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
         <div ref={ref}>{el}</div>
      </label>
   );
}
export default Checkbox;
