import styles from "./Service.module.scss";

type Props = {
   table: {
      thead: string[];
      tbody: {
         th1: string;
         th2: string;
      }[];
   };
};

function Table({ table }: Props) {
   return (
      <table className={styles.table}>
         <thead className={styles.table__thead}>
            <tr className={styles.table__thead__tr}>
               {table.thead.map((th, index) => (
                  <th className={styles.table__thead__title} key={index}>
                     {th}
                  </th>
               ))}
            </tr>
         </thead>
         <tbody className={styles.table__tbody}>
            {table.tbody.map((tr, index) => {
               return (
                  <tr className={styles.table__tbody__tr} key={index}>
                     <td className={styles.table__tbody__title}>{tr.th1}</td>
                     <td className={`${styles.table__tbody__title} ${styles.table__tbody__price}`}>{tr.th2}</td>
                  </tr>
               );
            })}
         </tbody>
      </table>
   );
}
export default Table;
