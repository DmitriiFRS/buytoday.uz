import styles from "../Aircond&SemiInd/AircondSemi.module.scss";

type Props = {
   totalItems: number;
   itemsPerPage: number;
   currentPage: number;
   setCurrentPage: (num: number) => void;
};

function Pagination({ totalItems, itemsPerPage, currentPage, setCurrentPage }: Props) {
   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
   }
   function togglePage(index: number) {
      if (currentPage === index + 1) return;
      setCurrentPage(index + 1);
      window.scrollTo(0, 0);
   }
   return (
      <div className={styles.pagination}>
         <ul className={styles.pagination__list}>
            {pageNumbers.map((el, index) => {
               return (
                  <li className={styles.pagination__item} key={index}>
                     <button onClick={() => togglePage(index)} className={`${currentPage === index + 1 ? styles.pagination__active : ""}`}>
                        {el}
                     </button>
                  </li>
               );
            })}
         </ul>
      </div>
   );
}
export default Pagination;
