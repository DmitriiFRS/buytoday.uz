import styles from "../Aircond&SemiInd/Params.module.scss";

type Params = {
   title: string;
   param: string | null;
};

type Props = {
   params: Params[];
};

function ParamsContent({ params }: Props) {
   return (
      <ul className={styles.params}>
         {params.map((item, index) => {
            return item.param ? (
               <li className={styles.params__item} key={index}>
                  <span className={styles.params__title}>{item.title}</span>
                  <span className={styles.params__separator}></span>
                  <div className={styles.params__param}>{item.param}</div>
               </li>
            ) : (
               ""
            );
         })}
      </ul>
   );
}
export default ParamsContent;
