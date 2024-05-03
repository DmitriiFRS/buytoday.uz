import { useState } from "react";
import styles from "../AirConditioners.module.scss";

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
   return (
      <label htmlFor={content.id[index]} key={index} className={styles.aircond__aside__checboxesBody}>
         <input
            className={isActive ? styles.aircond__aside__checked : ""}
            onChange={() => setActive(!isActive)}
            checked={isActive}
            id={content.id[index]}
            type="checkbox"
         />
         <div>{el}</div>
      </label>
   );
}
export default Checkbox;
