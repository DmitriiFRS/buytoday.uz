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
};

function Checkbox({ content, index, el }: Props) {
   const [isActive, setActive] = useState(false);
   const ref = useRef<HTMLDivElement>(null);
   function toggleCheckbox() {
      if (!isActive) {
         console.log(ref.current?.innerHTML);
      } else {
         console.log(null);
      }

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
