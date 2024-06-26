import styles from "../../Aircond&SemiInd/AircondSemi.module.scss";

type Props = {
   index: number;
   el: string;
   content: {
      title: string;
      list: string[];
      id: string[];
      titleVal: string;
      filterVal: string[];
   };
   checkboxState: { [key: string]: boolean };
   toggleCheckbox: Function;
};

function Checkbox({ index, el, content, checkboxState, toggleCheckbox }: Props) {
   return (
      <label htmlFor={content.id[index]} key={index} className={styles.aircond__aside__checboxesBody}>
         <input
            className={checkboxState[el] ? styles.aircond__aside__checked : ""}
            checked={checkboxState[el] || false}
            onChange={() => toggleCheckbox(content.titleVal, el)}
            id={content.id[index]}
            type="checkbox"
            value={el}
         />
         <div>{content.list[index]}</div>
      </label>
   );
}
export default Checkbox;
