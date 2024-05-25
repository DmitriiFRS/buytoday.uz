import Sidebar from "../AirConditioners/Sidebar/Sidebar";
import styles from "../Aircond&SemiInd/AircondSemi.module.scss";

function InnerGrid() {
   return (
      <section className={styles.aircond__grid}>
         <Sidebar />
         <div className={styles.aircond__main}>
            <h2 className={styles.aircond__title}>Мульти-сплит системы</h2>
            <ul className={styles.aircond__list}>
               {innerItems.map((el, index) => {
                  return <Item key={index} el={el} currencyVal={currencyVal} />;
               })}
               {outerItems.map((el, index) => {
                  return <ItemOuter key={index} el={el} />;
               })}
            </ul>
         </div>
      </section>
   );
}
export default InnerGrid;
