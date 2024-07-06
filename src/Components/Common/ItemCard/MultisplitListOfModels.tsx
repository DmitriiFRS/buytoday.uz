import styles from "../../Aircond&SemiInd/ItemAircondSemi.module.scss";
import Link from "next/link";

type ItemsInner = {
   model: string;
};

type Props = {
   items: ItemsInner[];
   index2: number;
};

function MultisplitListOfModels({ items, index2 }: Props) {
   return (
      <ul className={styles.item__models}>
         {items.map((models, modelIdx) => {
            return (
               <li key={modelIdx} className={index2 === modelIdx ? styles.item__models__active : ""}>
                  <Link href={`${"multi-" + models.model.replace(/\s|\//g, "-").toLowerCase()}`}>{models.model}</Link>
               </li>
            );
         })}
      </ul>
   );
}
export default MultisplitListOfModels;
